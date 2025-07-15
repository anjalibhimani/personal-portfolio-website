import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award } from 'lucide-react';

function Experience() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => [...prev, index]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = document.querySelectorAll('.experience-item');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            location: "San Francisco, CA",
            period: "January 2022 – Present",
            type: "Full-time",
            logo: "https://placehold.co/60x60/0F172A/38BDF8?text=TI",
            achievements: [
                "Led a cross-functional team of 8 developers in architecting and launching a microservices platform, resulting in 40% improved system performance",
                "Implemented AI-powered features using TensorFlow and Python, increasing user engagement by 35%",
                "Mentored 5 junior developers and established coding standards that reduced bug reports by 50%",
                "Spearheaded the migration to React 18 and Next.js, improving application load times by 60%"
            ],
            skills: ["React", "Node.js", "Python", "AWS", "Docker", "TypeScript"],
            highlights: [
                { icon: Users, text: "Team Lead" },
                { icon: TrendingUp, text: "40% Performance Boost" },
                { icon: Award, text: "Best Innovation Award" }
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Digital Solutions Corp.",
            location: "New York, NY",
            period: "March 2020 – December 2021",
            type: "Full-time",
            logo: "https://placehold.co/60x60/1E293B/10B981?text=DS",
            achievements: [
                "Developed and maintained React-based web applications serving 100K+ monthly active users",
                "Built RESTful APIs using Node.js and Express, improving data retrieval speed by 60%",
                "Collaborated with UX/UI designers to create responsive, accessible interfaces",
                "Implemented automated testing suite, reducing production bugs by 45%"
            ],
            skills: ["React", "Node.js", "MongoDB", "Express", "Jest", "Sass"],
            highlights: [
                { icon: Users, text: "100K+ Users" },
                { icon: TrendingUp, text: "60% Speed Improvement" },
                { icon: Award, text: "Quality Excellence" }
            ]
        },
        {
            title: "Junior Software Engineer",
            company: "StartupTech",
            location: "Austin, TX",
            period: "June 2018 – February 2020",
            type: "Full-time",
            logo: "https://placehold.co/60x60/1F2937/F59E0B?text=ST",
            achievements: [
                "Contributed to front-end development using React and TypeScript for a fintech application",
                "Participated in agile development processes and code reviews",
                "Optimized database queries, reducing load times by 25%",
                "Developed reusable UI components that improved development efficiency by 30%"
            ],
            skills: ["React", "TypeScript", "PostgreSQL", "Git", "Agile", "CSS3"],
            highlights: [
                { icon: TrendingUp, text: "25% Load Time Reduction" },
                { icon: Award, text: "Rising Star Award" }
            ]
        }
    ];

    const getYearsOfExperience = () => {
        const startDate = new Date('2018-06-01');
        const currentDate = new Date();
        const years = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
        return Math.floor(years);
    };

    return (
        <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    <Briefcase className="inline-block mr-3 text-cyan-400" size={40} />
                    Professional Experience
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
                    {getYearsOfExperience()}+ years of building scalable applications and leading development teams
                </p>

                {/* Experience Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                        <div className="text-2xl font-bold text-cyan-400">3</div>
                        <div className="text-sm text-gray-400">Companies</div>
                    </div>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                        <div className="text-2xl font-bold text-cyan-400">15+</div>
                        <div className="text-sm text-gray-400">Projects</div>
                    </div>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                        <div className="text-2xl font-bold text-cyan-400">5</div>
                        <div className="text-sm text-gray-400">Team Members Mentored</div>
                    </div>
                </div>
            </div>

            {/* Desktop Experience Layout */}
            <div className="hidden lg:block">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-indigo-400/50"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`experience-item relative pl-20 transition-all duration-700 ${visibleItems.includes(index)
                                        ? 'opacity-100 transform translate-x-0'
                                        : 'opacity-0 transform translate-x-10'
                                    }`}
                                data-index={index}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-cyan-400/50"></div>

                                {/* Connector line */}
                                <div className="absolute left-12 top-9 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>

                                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 overflow-hidden">
                                    {/* Header */}
                                    <div className="p-6 pb-4">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-12 h-12 rounded-lg border border-gray-600/50"
                                                />
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                                        {exp.title}
                                                    </h3>
                                                    <p className="text-cyan-400 font-medium text-lg">{exp.company}</p>
                                                </div>
                                            </div>
                                            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20 font-medium">
                                                {exp.type}
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center">
                                                <MapPin size={16} className="mr-1" />
                                                {exp.location}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar size={16} className="mr-1" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.highlights.map((highlight, i) => (
                                                <div key={i} className="flex items-center px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                                                    <highlight.icon size={12} className="mr-1.5 text-cyan-400" />
                                                    {highlight.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 pb-6">
                                        <ul className="space-y-3 mb-6">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="text-gray-300 flex items-start leading-relaxed">
                                                    <span className="text-cyan-400 mr-3 mt-1.5 text-xs">▶</span>
                                                    <span className="group-hover:text-gray-200 transition-colors duration-300">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50 font-medium hover:border-cyan-400/30 transition-colors duration-300">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;