import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Wrench, Award, Users, Brain, Zap } from 'lucide-react';

function Skills() {
    const [activeCategory, setActiveCategory] = useState('technical');
    const [visibleSkills, setVisibleSkills] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleSkills(prev => [...prev, index]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Ensure the DOM elements exist before observing
        const items = document.querySelectorAll('.skill-item');
        if (items.length > 0) { // Only observe if items are found
            items.forEach(item => observer.observe(item));
        }

        return () => observer.disconnect();
    }, [activeCategory]); // Re-run effect when activeCategory changes to observe new items

    const skillCategories = {
        programmingAndDev: {
            title: "Programming & Development",
            icon: Code,
            skills: [
                {
                    name: "JavaScript",
                    description: "Modern ES6+ Development",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                },
                {
                    name: "React",
                    description: "Component-based UI",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                {
                    name: "Python",
                    description: "Backend Development",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                },
                {
                    name: "HTML/CSS",
                    description: "Web Fundamentals",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                }
            ]
        },
        databaseAndCloud: {
            title: "Databases & Cloud Technologies",
            icon: Database,
            skills: [
                {
                    name: "PostgreSQL",
                    description: "Relational Database",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                }
            ]
        },
        softSkills: {
            title: "Soft Skills",
            icon: Users,
            skills: [
                {
                    name: "Communication",
                    description: "Effective communication skills",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                },
                {
                    name: "Leadership",
                    description: "Team leadership and motivation",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                },
                {
                    name: "Writing",
                    description: "Technical and academic writing",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                },
                {
                    name: "Research",
                    description: "Analytical and applied research",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                },
                {
                    name: "Critical Thinking",
                    description: "Objective analysis and evaluation of issues",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
                },
                {
                    name: "Collaboration",
                    description: "Teamwork and cooperative skills",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
                },
                {
                    name: "Problem Solving",
                    description: "Identifying solutions to complex challenges",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
                }
            ]
        },
        productivity: {
            title: "Productivity Tools",
            icon: Wrench,
            skills: [
                {
                    name: "Google Documents",
                    description: "Document creation and collaboration",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                },
                {
                    name: "Google Spreadsheets",
                    description: "Spreadsheet management",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                },
                {
                    name: "Google Slides",
                    description: "Presentation creation",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                },
                {
                    name: "Google Forms",
                    description: "Form creation and data collection",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                },
                {
                    name: "Microsoft PowerPoint",
                    description: "Presentation software",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                },
                {
                    name: "Microsoft Excel",
                    description: "Spreadsheet and data analysis",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                },
                {
                    name: "Microsoft Word",
                    description: "Document processing",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                },
                {
                    name: "Notion",
                    description: "All-in-one workspace and note-taking",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                }
            ]
        },
        certifications: {
            title: "Certifications, Awards, & Courses",
            icon: Award,
            skills: [
                {
                    name: "VEX Robotics Spin Up",
                    description: "2nd place at 2022 Swiss Qualifications",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Circle-icons-lightbulb.svg/1200px-Circle-icons-lightbulb.svg.png",
                    year: "2022"
                },
                {
                    name: "Agile/Scrum",
                    description: "Project Management",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Scrum_logo.svg/1200px-Scrum_logo.svg.png"
                }
            ]
        },
    };

    const categories = [
        { id: 'programmingAndDev', label: 'Programming & Development', icon: Code },
        { id: 'databaseAndCloud', label: 'Databases & Cloud Technologies', icon: Database },
        { id: 'softSkills', label: 'Soft Skills', icon: Users },
        { id: 'productivity', label: 'Productivity Tools', icon: Wrench },
        { id: 'certifications', label: 'Certifications, Awards, & Courses', icon: Award }
    ];

    const currentCategory = skillCategories[activeCategory];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    <Brain className="inline-block mr-3 text-cyan-400" size={40} />
                    Skills & Expertise
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A comprehensive overview of my technical abilities, professional skills, and continuous learning journey
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => {
                            setActiveCategory(category.id);
                            setVisibleSkills([]);
                        }}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                            }`}
                    >
                        <category.icon size={16} className="mr-2" />
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 text-center">
                <div className="flex items-center mb-8">
                    <currentCategory.icon className="text-cyan-400 mr-3" size={28} />
                    <h3 className="text-2xl font-medium text-white">{currentCategory.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentCategory.skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skill-item transition-all duration-700 ${visibleSkills.includes(index)
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-4'
                                }`}
                            data-index={index}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 p-4 relative overflow-hidden flex flex-col ${skill.year ? 'h-48.5' : 'h-40'}`}>
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Logo */}
                                <div className="flex items-center justify-center mb-2 relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-lg flex items-center justify-center group-hover:from-gray-600/60 group-hover:to-gray-500/60 transition-all duration-300 shadow-lg flex-shrink-0">
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-md hidden items-center justify-center">
                                            <span className="text-cyan-400 font-bold text-lg">
                                                {skill.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-grow flex flex-col">
                                    <h4 className="text-white font-semibold text-base mb-1 transition-colors duration-300 leading-tight">
                                        {skill.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 mb-3">
                                        {skill.description}
                                    </p>

                                    {/* Year display for certifications */}
                                    {skill.year && (
                                        <div className="mt-auto mb-3">
                                            <span className="text-xs text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 px-2 py-1 rounded-full border border-cyan-400/20 font-medium">
                                                Certified {skill.year}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Subtle accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
