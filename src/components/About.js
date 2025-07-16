import React, { useState, useEffect } from 'react';
import { User, Linkedin, Github, Download, Code, Coffee, Sparkles } from 'lucide-react';
import TypeWriter from './TypeWriter.js';

function About() {
    const [profilePicSrc, setProfilePicSrc] = useState('/portoflio-picture.jpeg');
    const [showTypewriter, setShowTypewriter] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const fallbackSrc = 'https://placehold.co/400x400/0F172A/38BDF8?text=AB';

    const roles = [
        "Aspiring Software Engineer",
        "Problem Solver",
        "Researcher",
        "Critical Thinker",
        "Effective Communicator"
    ];

    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showTypewriter) {
            const interval = setInterval(() => {
                setCurrentRoleIndex(prev => (prev + 1) % roles.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [showTypewriter, roles.length]);

    const handleImageError = () => {
        setProfilePicSrc(fallbackSrc);
    };

    const stats = [
        { value: "5+", label: "Years Coding", icon: Code },
        { value: "2", label: "Independent Projects", icon: Sparkles },
        { value: "∞", label: "Iced Lattes", icon: Coffee }
    ];

    return (
        <div className="text-center max-w-6xl mx-auto mt-[-3rem] relative">
            {/* Profile Section */}
            <div className="relative mb-12 z-10">
                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-900 group">
                    <div className="absolute inset-0 bg-gray-900/30 rounded-full"></div>
                    <img
                        src={profilePicSrc}
                        alt="Anjali Bhimani Profile"
                        onError={handleImageError}
                        className="w-full h-full object-cover transform scale-[1.6] translate-x-[5%] group-hover:scale-[1.65] transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Name and Title */}
            <div className="mb-8 relative z-10">
                <h1 className="text-4xl md:text-6xl font-light mb-6 min-h-[1.2em]">
                    {showTypewriter ? (
                        <span className="text-white">
                            <TypeWriter
                                text="Hello, I'm Anjali Bhimani"
                                delay={120}
                                onComplete={() => console.log('Name typing complete')}
                            />
                        </span>
                    ) : (
                        <span className="opacity-0">Hello, I'm Anjali Bhimani</span>
                    )}
                </h1>

                <div className="text-xl md:text-2xl text-cyan-400 font-medium h-12 flex items-center justify-center">
                    {showTypewriter ? (
                        <span className="transition-all duration-500">
                            {roles[currentRoleIndex]}
                        </span>
                    ) : (
                        <span className="opacity-0">Full Stack Developer</span>
                    )}
                </div>
            </div>

            {/* Description */}
            <div className="mb-12 relative z-10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                    <User className="inline-block mr-2 text-cyan-400" size={20} />
                    I'm passionate about <span className="text-cyan-400 font-medium">leveraging technology and tools</span> to build <span className="text-cyan-400 font-medium"> innovative solutions</span> Practical, impactful solutions </span> that improve people's lives. With a focus on modern web technologies, I am to create </span> to build <span className="text-cyan-400 font-medium">reliable, user-focused applications</span> that can make a difference. 
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group">
                        <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <a
                    href="www.linkedin.com/in/anjali-bhimani-386028276"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 font-medium group"
                >
                    <Linkedin size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Connect on LinkedIn
                </a>

                <a
                    href="/Fall-2024-Resumé.pdf"
                    download="Anjali_Bhimani_Resume.pdf"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 font-medium group"
                >
                    <Download size={18} className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                    Download Resume
                </a>

                <a
                    href="https://github.com/anjali-bhimani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 font-medium group"
                >
                    <Github size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    View GitHub
                </a>
            </div>
        </div>
    );
}

export default About;
