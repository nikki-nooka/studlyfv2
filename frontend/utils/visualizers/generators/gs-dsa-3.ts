import { LayoutEngine } from '../layoutEngine';

export const bestTimeToBuyAndSellStockWithCooldownGenerator = (inputStr: string) => {
  let prices = [1, 2, 3, 0, 2];
  try {
    const match = inputStr.match(/\[(.*?)\]/);
    if (match) {
      const parsed = match[1].split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
      if (parsed.length > 0) {
        prices = parsed;
      }
    }
  } catch (e) {}

  const steps: any[] = [];
  
  if (prices.length < 2) {
    steps.push({
      desc: `Prices length < 2. Max profit is 0.`,
      hold: 0, sold: 0, rest: 0,
      finished: true
    });
    return { n: 0, steps };
  }

  let hold = -prices[0];
  let sold = 0;
  let rest = 0;

  steps.push({
    desc: `Init: hold = -prices[0] = ${hold}, sold = 0, rest = 0.`,
    hold, sold, rest
  });

  for (let i = 1; i < prices.length; i++) {
    const prevHold = hold;
    const price = prices[i];
    
    hold = Math.max(hold, rest - price);
    rest = Math.max(rest, sold);
    sold = prevHold + price;

    steps.push({
      desc: `Day ${i} (Price = ${price}): hold = max(prev_hold, rest - price) = ${hold}. rest = max(prev_rest, sold) = ${rest}. sold = prev_hold + price = ${sold}.`,
      hold, sold, rest
    });
  }

  steps.push({
    desc: `Final Result: max(sold=${sold}, rest=${rest}) = ${Math.max(sold, rest)}.`,
    hold, sold, rest,
    finished: true
  });

  return { n: 0, steps };
};
