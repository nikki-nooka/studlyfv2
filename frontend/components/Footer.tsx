import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#0B0B0F] py-12 px-4 md:px-10 font-poppins text-white overflow-hidden relative border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
                
                {/* TOP CONTACT CARD */}
                <div className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    
                    {/* Left: Founder Section */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-48 h-48 rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
                            {/* Founder Image */}
                            <img 
                                src="/images/Eshwar.jpg" 
                                alt="Founder" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[10px] font-black tracking-[0.15em] text-[#CFCFEA] uppercase">
                            Connect with Founder
                        </p>
                    </div>

                    {/* Right: Contact Us Section */}
                    <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                            Contact Us
                        </h2>
                        
                        <div className="flex items-center gap-6 md:gap-8">
                            <a href="mailto:support@studlyf.com" className="flex flex-col items-center gap-3 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all">
                                    <Mail size={22} className="text-gray-300 group-hover:text-white" />
                                </div>
                                <span className="text-[9px] font-black tracking-[0.15em] text-gray-500 group-hover:text-gray-300 uppercase">Email</span>
                            </a>

                            <a href="https://whatsapp.com/channel/0029VbCHsjAHVvTRqLfOau24/113" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-green-500/10 group-hover:border-green-500/50 transition-all">
                                    <WhatsAppIcon size={22} />
                                </div>
                                <span className="text-[9px] font-black tracking-[0.15em] text-gray-500 group-hover:text-gray-300 uppercase">Whatsapp</span>
                            </a>

                            <a href="https://www.instagram.com/studlyf.in/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-pink-500/10 group-hover:border-pink-500/50 transition-all">
                                    <Instagram size={22} />
                                </div>
                                <span className="text-[9px] font-black tracking-[0.15em] text-gray-500 group-hover:text-gray-300 uppercase">Instagram</span>
                            </a>
                        </div>
                        
                        <p className="text-[10px] font-bold tracking-[0.1em] text-gray-500 uppercase mt-2">
                            Contact us anytime, we are here to help.
                        </p>
                    </div>

                </div>

                {/* BOTTOM LINKS SECTION */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
                    
                    {/* Logo & Tagline */}
                    <div className="flex flex-col gap-5 max-w-[280px]">
                        <div className="bg-white px-6 py-3 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] w-fit overflow-hidden relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_75%)]" />
                            <img 
                                src="/images-optimized/studlyf.webp" 
                                alt="Studlyf" 
                                className="h-10 md:h-14 w-auto object-contain relative z-10"
                            />
                        </div>
                        <p className="text-xs font-semibold text-gray-400 leading-relaxed mt-2">
                            Empowering the next generation of engineers with AI-driven career tools and resources.
                        </p>
                    </div>

                    {/* Link Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 flex-grow">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/dashboard/my-courses" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Courses</Link>
                            <Link to="/learn/company-modules" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Company Modules</Link>
                            <Link to="/blog" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Blogs</Link>
                        </div>
                        {/* Col 2 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/job-prep/portfolio" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Portfolio</Link>
                            <Link to="/job-prep/resume-builder" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Resume</Link>
                            <Link to="/skill-assessment" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Skills Assignment</Link>
                            <Link to="/job-prep/mock-interview" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Interviews</Link>
                            <Link to="/job-prep/projects" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Project</Link>
                        </div>
                        {/* Col 3 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/ai-tools" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">AI Tools</Link>
                        </div>
                        {/* Col 4 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/about" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">About Application</Link>
                            <a href="mailto:support@studlyf.com" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Contact Us</a>
                            <Link to="/roadmaps" className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Resources</Link>
                        </div>
                    </div>

                </div>

                {/* Copyright Line */}
                <div className="w-full text-center pt-8 mt-4">
                    <p className="text-[10px] font-black tracking-[0.3em] text-[#4A4A5A] uppercase">
                        &copy; {new Date().getFullYear()} STUDLYF &bull; ALL RIGHTS RESERVED
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
