import React, { useState, useEffect } from 'react';
import { API_BASE_URL, authHeaders } from '../../../apiConfig';
import { CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminOpportunitiesApproval = () => {
    const [opportunities, setOpportunities] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPendingOpportunities = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/opportunities/admin/pending`, { headers: authHeaders() });
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setOpportunities(data);
        } catch (error) {
            console.error('Error fetching pending opportunities', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingOpportunities();
    }, []);

    const handleAction = async (id: string, status: 'active' | 'rejected') => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/opportunities/admin/${id}/status`, {
                method: 'PATCH',
                headers: { ...authHeaders(), 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            if (res.ok) {
                setOpportunities(prev => prev.filter(opp => opp._id !== id));
            } else {
                alert('Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status', error);
        }
    };

    if (loading) return <div className="text-white p-8">Loading pending opportunities...</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Pending Opportunities</h1>
            
            {opportunities.length === 0 ? (
                <div className="text-white/60 p-12 bg-white/5 rounded-2xl text-center border border-white/10">
                    No pending opportunities require approval.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {opportunities.map((opp) => (
                        <motion.div key={opp._id} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        >
                            <h3 className="text-xl font-bold mb-2">{opp.title}</h3>
                            <p className="text-sm text-white/60 mb-1">Organization: {opp.organization}</p>
                            <p className="text-sm text-white/60 mb-4">Type: <span className="capitalize">{opp.type}</span></p>
                            
                            <div className="flex gap-4 mt-4">
                                <button 
                                    onClick={() => handleAction(opp._id, 'active')}
                                    className="flex-1 flex items-center justify-center gap-2 bg-green-500/20 text-green-400 py-2 rounded-lg font-bold hover:bg-green-500/30 transition-colors"
                                >
                                    <CheckCircle size={18} /> Approve
                                </button>
                                <button 
                                    onClick={() => handleAction(opp._id, 'rejected')}
                                    className="flex-1 flex items-center justify-center gap-2 bg-red-500/20 text-red-400 py-2 rounded-lg font-bold hover:bg-red-500/30 transition-colors"
                                >
                                    <XCircle size={18} /> Reject
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminOpportunitiesApproval;
