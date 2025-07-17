import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Wrench, Award, Users, Brain, Zap } from 'lucide-react';

function Skills() {
    const [activeCategory, setActiveCategory] = useState('programmingAndDev');
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
        if (items.length > 0) {
            items.forEach(item => observer.observe(item));
        }

        return () => observer.disconnect();
    }, [activeCategory]);

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
                },
                {
                    name: "GitHub",
                    description: "Version Control & Collaboration",
                    logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
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
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
                },
                {
                    name: "Leadership",
                    description: "Team leadership and motivation",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Leadership_icon.svg/1200px-Leadership_icon.svg.png"
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
                    description: "Objective analysis to evaluate issues",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
                },
                {
                    name: "Collaboration",
                    description: "Teamwork and cooperative skills",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
                },
                {
                    name: "Problem Solving",
                    description: "Identifying solutions to challenges",
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
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1200px-Google_Docs_logo_%282014-2020%29.svg.png"
                },
                {
                    name: "Google Spreadsheets",
                    description: "Spreadsheet management",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png"
                },
                {
                    name: "Google Slides",
                    description: "Presentation creation",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Google_Slides_2020_Logo.svg/1200px-Google_Slides_2020_Logo.svg.png"
                },
                {
                    name: "Google Forms",
                    description: "Form creation and data collection",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Forms_2020_Logo.svg/1200px-Google_Forms_2020_Logo.svg.png"
                },
                {
                    name: "Microsoft PowerPoint",
                    description: "Presentation software",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png"
                },
                {
                    name: "Microsoft Excel",
                    description: "Spreadsheet and data analysis",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
                },
                {
                    name: "Microsoft Word",
                    description: "Document processing",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
                },
                {
                    name: "Notion",
                    description: "All-in-one workspace and note-taking",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png"
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
                    logo: "https://robotics.nasa.gov/wp-content/uploads/2020/04/vex_robotics_logo.png",
                    year: "2022"
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
    const Icon = currentCategory.icon;

    return (
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    <Brain className="inline-block mr-2 text-cyan-400" size={32} />
                    Skills
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                    An overview of my technical and professional skills
                </p>
            </div>

            {/* Category Tabs - Mobile Optimized */}
            <div className="mb-8 sm:mb-12">
                <div className="flex overflow-x-auto gap-1 sm:gap-2 pb-2 px-1 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                                setVisibleSkills([]);
                            }}
                            className={`flex items-center px-2 sm:px-3 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 text-xs sm:text-sm min-w-0 ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                                }`}
                        >
                            <category.icon size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
                            <span className="truncate">{category.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                    <Icon className="text-cyan-400 mr-2 sm:mr-3 flex-shrink-0" size={20} />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white leading-tight">{currentCategory.title}</h3>
                </div>

                <div className={`grid gap-3 sm:gap-4 ${
                    activeCategory === 'softSkills' 
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' 
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
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
                            {activeCategory === 'softSkills' ? (
                                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 p-3 sm:p-4 relative overflow-hidden flex flex-col w-full box-border min-h-[120px] sm:min-h-[140px]">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Skill content */}
                                    <div className="relative z-10 flex-grow flex flex-col justify-center text-center">
                                        <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2 transition-colors duration-300 leading-tight">
                                            {skill.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors duration-300 flex-grow">
                                            {skill.description}
                                        </p>
                                    </div>

                                    {/* Subtle accent line */}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            ) : (
                                <div className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 p-3 sm:p-4 relative overflow-hidden flex flex-col w-full box-border ${skill.year ? 'min-h-[180px] sm:min-h-[200px]' : 'min-h-[150px] sm:min-h-[170px]'}`}>
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Logo */}
                                    <div className="flex items-center justify-center mb-3 relative z-10">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-lg flex items-center justify-center group-hover:from-gray-600/60 group-hover:to-gray-500/60 transition-all duration-300 shadow-lg flex-shrink-0">
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-md hidden items-center justify-center">
                                                <span className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">
                                                    {skill.name.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skill text */}
                                    <div className="relative z-10 flex-grow flex flex-col text-center">
                                        <h4 className="text-white font-semibold text-sm sm:text-base mb-2 transition-colors duration-300 leading-tight">
                                            {skill.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors duration-300 flex-grow">
                                            {skill.description}
                                        </p>

                                        {/* Year for certification */}
                                        {skill.year && (
                                            <div className="mt-3 pt-2">
                                                <span className="text-xs text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 px-2 py-1 rounded-full border border-cyan-400/20 font-medium">
                                                    Certified {skill.year}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Subtle accent line */}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
