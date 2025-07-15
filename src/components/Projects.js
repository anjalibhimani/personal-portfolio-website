import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: "AI-Powered Analytics Dashboard",
            description: "A comprehensive dashboard featuring real-time data visualization, predictive analytics, and machine learning insights for business intelligence.",
            image: "https://placehold.co/600x400/0F172A/38BDF8?text=AI+Dashboard",
            technologies: ["React", "TypeScript", "Python", "TensorFlow", "D3.js", "AWS"],
            previewLink: "#",
            githubLink: "#",
            category: "Full Stack"
        },
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration, inventory management, and advanced search capabilities.",
            image: "https://placehold.co/600x400/1E293B/10B981?text=E-Commerce",
            technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
            previewLink: "#",
            githubLink: "#",
            category: "Web App"
        },
        {
            title: "Mobile Banking App",
            description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
            image: "https://placehold.co/600x400/1F2937/F59E0B?text=Banking+App",
            technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Plaid API"],
            previewLink: "#",
            githubLink: "#",
            category: "Mobile"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A showcase of my recent work, demonstrating expertise in modern web technologies and innovative problem-solving
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20 backdrop-blur-sm font-medium">
                                    {project.category}
                                </span>
                            </div>

                            {/* Overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.slice(0, 4).map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50 font-medium">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 4 && (
                                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md border border-gray-600/50">
                                        +{project.technologies.length - 4}
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <a
                                    href={project.previewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-sm font-medium"
                                >
                                    <ExternalLink size={14} className="mr-2" />
                                    UI Preview
                                </a>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-cyan-400/30 text-sm font-medium"
                                >
                                    <Github size={14} className="mr-2" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;