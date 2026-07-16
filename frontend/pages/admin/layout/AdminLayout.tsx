
import React, { useState } from 'react';
import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../../AuthContext';

const AdminLayout: React.FC = () => {
    const { user, loading } = useAuth();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    if (loading) return <div className="h-screen w-full bg-[#09090B] flex items-center justify-center text-purple-500 font-bold">Initializing Admin Space...</div>;

    if (!user || !['super_admin', 'admin', 'institution'].includes(user.role)) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-[#09090B] text-[#F4F4F5] font-sans overflow-hidden">
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.02);
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(124, 58, 237, 0.3);
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(124, 58, 237, 0.6);
                    }
                `}
            </style>
            {/* Sidebar */}
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col relative overflow-hidden h-screen">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -mr-64 -mt-64 z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -ml-32 -mb-32 z-0 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex-grow overflow-y-auto p-4 md:p-8 custom-scrollbar">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-[1600px] mx-auto"
                    >
                        <AdminContentWrapper>
                            <Outlet />
                        </AdminContentWrapper>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

class AdminContentWrapper extends React.Component<{ children: React.ReactNode }, { hasError: boolean; errorKey: number }> {
    state = { hasError: false, errorKey: 0 };
    static getDerivedStateFromError() { return { hasError: true }; }
    componentDidCatch(error: Error) {
        console.error('[AdminContentError]', error);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <h2 className="text-xl font-bold text-white mb-2">Page crashed</h2>
                    <p className="text-gray-400 text-sm mb-4">This section encountered an error.</p>
                    <button
                        onClick={() => {
                            this.setState({ hasError: false, errorKey: this.state.errorKey + 1 });
                            window.location.hash = '#/admin/dashboard';
                        }}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium text-white transition-colors"
                    >
                        Go to Dashboard
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

