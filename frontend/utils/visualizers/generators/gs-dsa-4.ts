export const gsDsa4Generator = (inputStr: string) => {
  let intervals = [[0, 30], [5, 10], [15, 20]];
  try {
    const startIdx = inputStr.indexOf('[');
    const endIdx = inputStr.lastIndexOf(']');
    if (startIdx !== -1 && endIdx !== -1) {
      const parsed = JSON.parse(inputStr.substring(startIdx, endIdx + 1));
      if (Array.isArray(parsed) && parsed.length > 0 && Array.isArray(parsed[0])) {
        intervals = parsed;
      }
    }
  } catch (e) {
    // fallback to default
  }

  const steps: any[] = [];
  
  steps.push({
    arr: [],
    pivot: -1,
    active: [],
    desc: `Input parsed. Intervals: ${JSON.stringify(intervals)}. Sorting by start time...`
  });

  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
  
  steps.push({
    arr: [],
    pivot: -1,
    active: [],
    desc: `Sorted intervals: ${JSON.stringify(sortedIntervals)}. Initializing a min-heap to track room end times.`
  });

  const heap: number[] = [];

  for (let i = 0; i < sortedIntervals.length; i++) {
    const [start, end] = sortedIntervals[i];
    
    steps.push({
      arr: [...heap],
      pivot: -1,
      active: [],
      desc: `Processing meeting [${start}, ${end}]. Current heap (end times): [${heap.join(', ')}].`
    });

    if (heap.length === 0) {
      heap.push(end);
      steps.push({
        arr: [...heap],
        pivot: -1,
        active: [0],
        desc: `Heap is empty. Allocate new room. Pushed end time ${end}.`
      });
    } else {
      let minIdx = 0;
      for (let j = 1; j < heap.length; j++) {
        if (heap[j] < heap[minIdx]) {
          minIdx = j;
        }
      }
      const minEnd = heap[minIdx];

      if (start >= minEnd) {
        steps.push({
          arr: [...heap],
          pivot: minIdx,
          active: [],
          desc: `Meeting starts at ${start}, which is >= earliest ending room at ${minEnd}. Room freed! Reusing it.`
        });
        
        heap[minIdx] = end;
        
        steps.push({
          arr: [...heap],
          pivot: -1,
          active: [minIdx],
          desc: `Updated room end time to ${end}.`
        });
      } else {
        steps.push({
          arr: [...heap],
          pivot: minIdx,
          active: [],
          desc: `Meeting starts at ${start}, which is < earliest ending room at ${minEnd}. Need a new room.`
        });
        
        heap.push(end);
        
        steps.push({
          arr: [...heap],
          pivot: -1,
          active: [heap.length - 1],
          desc: `Allocated new room. Pushed end time ${end} to heap.`
        });
      }
    }
  }

  steps.push({
    arr: [...heap],
    pivot: -1,
    active: [],
    desc: `All meetings processed. Final heap size is ${heap.length}, so we need ${heap.length} meeting rooms.`,
    finished: true
  });

  return { initialArr: [], steps };
};
