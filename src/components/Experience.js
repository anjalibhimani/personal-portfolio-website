'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
 
function Experience() {

    // state to know which experince is being viewed by the user
    const [visibleItems, setVisibleItems] = useState([]);

    // refs to get all the experience elements for intersection observer without re-rendering
    const experienceRefs = useRef([]);

    // using intersectionObserver to fade in the experience for UI
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {

                //use set to avoid duplicates with mult elements being viewed on a screen
                setVisibleItems((prev) => {
                    const newItems = new Set(prev);

                    // for all observed elements, if visible right now then add that element index to set
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            newItems.add(parseInt(entry.target.dataset.index));
                        }
                    });

                    // return the new state with newly viewed elements as ana array again
                    return [...newItems];
                });
            },

            { threshold: 0.1 });

        // observe all experience elements using refs for monitoring 
        experienceRefs.current = experienceRefs.current.slice(0, experiences.length);
        experienceRefs.current.forEach(item => item && observer.observe(item));

        return () => observer.disconnect();
    }, []);

    // array to hold all the experiences data 
    const experiences = [
        {
            title: "Business Development Intern",
            company: "Formel Skin",
            location: "Berlin, Germany",
            period: "June 2025 – August 2025",
            type: "Internship",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHLinna1bHVvA/company-logo_200_200/company-logo_200_200/0/1704982116415/formelskin_logo?e=2147483647&v=beta&t=ks9aZfoWcogPtXx1YFrzRj6Ugn205OLdk17So6r8t3c",
            achievements: [
                "Analyzed and compared features and capabilities of two customer communication platforms to support the company’s initiative to incorporate AI technologies, including AI agents",
                "Performed a detailed cost analysis of different platform components and used current expenditures to project potential savings",
                "Assessed limitations of the current platform in supporting AI-driven workflows and identified key operational inefficiencies affecting overall performance and user experience",
                "Engaged in technical discussions with platform providers to clarify requirements and integration steps",
                "Developed and automated the Learning & Development budget request process using JavaScript-based Google Apps Script, implementing event-driven triggers, data validation, and persistent data storage in Google Sheets with automated email notifications",
                "Automated L&D budget renewals using Google Apps Script, implementing daily triggers to calculate budget allocations based on employee join date, tier, and hours worked, with real-time updates to a centralized spreadsheet tracking all budgets"
            ],
            skills: ["JavaScript", "Google Apps Script", "Data Analysis", "Workflow Automation", "Cost Analysis & Financial Forecasting", "Technical Research", "Process Optimization", "Project Coordination"]
        },
        {
            title: "Illicit Trade Prevention Intern",
            company: "Philip Morris International",
            location: "Lausanne, Switzerland",
            period: "June 2024 – July 2024",
            type: "Internship",
            logo: "https://companieslogo.com/img/orig/PM-9b5fa1ae.png?t=1720244493",
            achievements: [
                "Created and presented debriefing materials for agencies supporting the Illicit Trade Prevention (ITP) team in PMI's Legal & Compliance department",
                "Managed a project researching 150+ global brands and products, synthesizing findings into a master Excel inventory and two catalogue-style brand boards",
                "Produced a live data dashboard with charts and visuals for ongoing illicit cigarette consumption analysis",
                "Proofread and cross-checked final KPMG reports for 38 European markets, ensuring data and calculation accuracy"
            ],
            skills: ["Data Analysis", "Excel (Advanced Functions & Pivot Tables)", "Research & Documentation", "Consultative Problem Solving", "Cross-functional Communication", "Project Management", "PowerPoint Presentation Design", "Analytical Thinking"]
        },
        {
            title: "Market Research Analyst",
            company: "Odders Lab",
            location: "Remote",
            period: "January 2023 – March 2023",
            type: "Internship",
            logo: "https://odderslab.com/wp-content/uploads/2023/06/Logotipo-Odders-Color-Fondo-Blanco-1200x1200-1.jpg",
            achievements: [
                "Collaborated in a team of 5 to conduct target market research on virtual reality products aimed at the 35+ demographic",
                "Researched 10 potential competitors in the virtual reality software industry to identify strengths and weaknesses",
                "Investigated 5 market barriers and developed innovative strategies to overcome reduced use of virtual reality",
                "Synthesized all research and strategies into a client presentation and presented it remotely to the Odders Lab team"
            ],
            skills: ["Market Research", "Data Analysis", "Competitive Analysis", "Team Collaboration", "Presentation Skills", "Strategic Thinking", "Qualitative & Quantitative Research", "Team Management"]
        }
    ];

    // get number of years of experince since start date of my first internship 
    function getExperienceTime() {
        const startYear = 2023;
        const currentYear = new Date().getFullYear();
        return currentYear - startYear;
    };

    return (
        <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-6">

            {/* title for the secion */}
            <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    <Briefcase className="inline-block mr-3 text-cyan-400" size={40} />
                    Experience
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 px-2">
                    {getExperienceTime()}+ years of professional experience
                </p>
            </div>

            {/* timeline setup for the experince bar */}
            <div>
                <div className="relative">

                    {/* timeline line */}
                    <div className="hidden md:block absolute left-2.5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-indigo-400/50"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                ref={element => experienceRefs.current[index] = element}
                                className={`experience-item relative md:pl-20 transition-all duration-700 ${visibleItems.includes(index)
                                    ? 'opacity-100 transform translate-x-0'
                                    : 'opacity-0 transform translate-x-10'
                                    }`}
                                data-index={index}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {/* timline bullet points for each experince */}
                                <div className="hidden md:block absolute left-2.5 md:left-6 top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-gray-900 z-10 shadow-lg shadow-cyan-400/50"></div>

                                {/* connecting the dots with a line */}
                                <div className="hidden md:block absolute left-9 md:left-12 top-9 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>

                                {/* cards for the experinces */}
                                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 overflow-hidden">

                                    {/* display company logo and also full official name */}
                                    <div className="p-6 pb-4">
                                        <div className="flex flex-col md:flex-row items-start items-start sm:items-center justify-between mb-4">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg border border-gray-600/50 flex-shrink-0 ${exp.company === 'Philip Morris International' ? 'bg-white' : ''}`}
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                                        {exp.title}
                                                    </h3>
                                                    <p className="text-cyan-400 font-medium text-base sm:text-lg">{exp.company}</p>
                                                </div>
                                            </div>
                                            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20 font-medium self-start md:self-auto flex-shrink-0">
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* where and the dates for my experience */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center">
                                                <MapPin size={16} className="mr-1 flex-shrink-0" />
                                                <span className="truncate">{exp.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar size={16} className="mr-1 flex-shrink-0" />
                                                <span className="truncate">{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* what I did in the experience */}
                                    <div className="px-6 pb-6">
                                        <ul className="space-y-3 mb-6">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="text-gray-300 flex items-start leading-relaxed">
                                                    <span className="text-cyan-400 mr-3 mt-1.5 text-xs flex-shrink-0">▶</span>
                                                    <span className="group-hover:text-gray-200 transition-colors duration-300">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* the skills I gained during the experience */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="px-2 md:px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50 font-medium hover:border-cyan-400/30 transition-colors duration-300">
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
