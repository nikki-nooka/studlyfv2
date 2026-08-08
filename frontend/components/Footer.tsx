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
        <footer className="w-full bg-[#0B0B0F] py-10 px-4 sm:px-6 md:px-12 font-poppins text-white overflow-hidden relative border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10 md:gap-14">
                
                {/* TOP CONTACT CARD */}
                <div className="w-full bg-gradient-to-br from-[#120B2E] via-[#160E36] to-[#0D0722] border border-purple-500/20 rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_20px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
                    {/* Ambient Subtle Glow */}
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Left: Founder Section */}
                    <div className="flex flex-col items-center gap-3 relative z-10">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl group">
                            {/* Founder Image */}
                            <img 
                                src="/images-optimized/Eshwar.webp" 
                                onError={(e) => { (e.target as HTMLImageElement).src = '/images/Eshwar.jpg'; }}
                                alt="Founder" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#CFCFEA] uppercase text-center mt-1">
                            CONNECT WITH FOUNDER
                        </p>
                    </div>

                    {/* Right: Contact Us Section */}
                    <div className="flex flex-col items-center md:items-end gap-5 text-center md:text-right relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-poppins">
                            CONTACT US
                        </h2>
                        
                        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 py-1">
                            <a href="mailto:support@studlyf.com" className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300 shadow-lg">
                                    <Mail size={22} className="text-gray-300 group-hover:text-white" />
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-gray-400 group-hover:text-white uppercase transition-colors">EMAIL</span>
                            </a>

                            <a href="https://whatsapp.com/channel/0029VbCHsjAHVvTRqLfOau24/113" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-300 shadow-lg">
                                    <WhatsAppIcon size={22} />
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-gray-400 group-hover:text-white uppercase transition-colors">WHATSAPP</span>
                            </a>

                            <a href="https://www.instagram.com/studlyf.in/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-pink-500/20 group-hover:border-pink-500/50 transition-all duration-300 shadow-lg">
                                    <Instagram size={22} />
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-gray-400 group-hover:text-white uppercase transition-colors">INSTAGRAM</span>
                            </a>
                        </div>
                        
                        <p className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.15em] text-gray-400 uppercase mt-1">
                            CONTACT US ANYTIME, WE ARE HERE TO HELP.
                        </p>
                    </div>

                </div>

                {/* BOTTOM LINKS SECTION */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 pt-4">
                    
                    {/* Logo & Tagline */}
                    <div className="flex flex-col gap-4 max-w-xs">
                        <div className="bg-white px-5 py-3 rounded-2xl flex items-center justify-center shadow-xl w-fit overflow-hidden relative">
                            <img 
                                src="/images-optimized/studlyf.webp" 
                                onError={(e) => { (e.target as HTMLImageElement).src = '/images/studlyf.png'; }}
                                alt="Studlyf" 
                                className="h-10 sm:h-12 w-auto object-contain relative z-10"
                            />
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-400 leading-relaxed mt-1">
                            Empowering the next generation of engineers with AI-driven career tools and resources.
                        </p>
                    </div>

                    {/* Quick Link Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 flex-grow w-full">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-3.5">
                            <Link to="/learn/courses-overview" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">COURSES</Link>
                            <Link to="/learn/company-modules" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">COMPANY MODULES</Link>
                            <Link to="/blog" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">BLOGS</Link>
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-col gap-3.5">
                            <Link to="/job-prep/portfolio" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">PORTFOLIO</Link>
                            <Link to="/job-prep/resume-builder" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">RESUME</Link>
                            <Link to="/learn/assessment-intro" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">SKILLS ASSIGNMENT</Link>
                            <Link to="/job-prep/mock-interview" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">INTERVIEWS</Link>
                            <Link to="/job-prep/projects" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">PROJECT</Link>
                        </div>

                        {/* Col 3 */}
                        <div className="flex flex-col gap-3.5">
                            <Link to="/ai-tools" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">AI TOOLS</Link>
                        </div>

                        {/* Col 4 */}
                        <div className="flex flex-col gap-3.5">
                            <Link to="/about" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">ABOUT APPLICATION</Link>
                            <a href="mailto:support@studlyf.com" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">CONTACT US</a>
                            <Link to="/roadmaps" className="text-xs font-black text-gray-300 hover:text-purple-400 uppercase tracking-wider transition-colors">RESOURCES</Link>
                        </div>
                    </div>

                </div>

                {/* Copyright Line */}
                <div className="w-full text-center pt-8 border-t border-white/5 mt-4">
                    <p className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#4A4A5A] uppercase">
                        &copy; {new Date().getFullYear()} STUDLYF &bull; ALL RIGHTS RESERVED
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

