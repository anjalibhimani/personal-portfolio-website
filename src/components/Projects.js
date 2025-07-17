import React, { useState } from 'react'; 
import { ExternalLink, Github, Folder } from 'lucide-react';

function Projects() {
    // state to track if user is hovering over a project for animation 
    const [hoveredProject, setHoveredProject] = useState(null);

    // array of personal project data 
    const projects = [
        {
            title: "Interactive Portfolio Website",
            description: "A responsive portfolio website built with React, featuring animations, a typewriter effect, and an interactive contact form with a modern UI.",
            image: "https://placehold.co/600x400/0F172A/38BDF8?text=Portfolio+Website&font-size=26",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Lucide React", "HTML5", "CSS3", "Git"],
            previewLink: "https://anjali-bhimani.com/",
            githubLink: "https://github.com/anjalibhimani/personal-portfolio-website.git",
            category: "Frontend", 
            year: "2025"
        },
        {
            title: "ResNet-18 Garbage Classifier (Jetson)",
            description: "Developed and deployed a ResNet-18 deep learning model on NVIDIA Jetson to classify 12 types of garbage for enhanced recycling efforts.",
            image: "https://placehold.co/600x400/0F172A/10B981?text=ResNet-18%0AGarbage+Classifier&font-size=26",
            technologies: ["PyTorch", "ResNet-18", "ONNX", "Python", "Deep Learning", "NVIDIA Jetson", "jetson-inference"],
            previewLink: "https://www.youtube.com/watch?v=Z7oWlMCnnb0",
            githubLink: "https://github.com/anjalibhimani/final-project-repo.git",
            category: "Machine Learning / Computer Vision", 
            year: "2022"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        
            {/* title and description for the page */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-cyan-200">
                    <Folder className="inline-block mr-3 text-cyan-200" size={40} />
                    Independent Projects
                </h2>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                    Recent projects showcasing my growing skills in web development and creative problem-solving
                </p>
            </div>

            {/* formatting the project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* formatting the image for the project*/}
                        <div className="relative h-48 sm:h-52 md:h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>

                            {/* badges for the cert year and the category/type of project */}
                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-cyan-400/10 text-cyan-400 text-xs sm:text-sm rounded-full border border-cyan-400/20 backdrop-blur-sm font-medium">
                                    {project.category}
                                </span>
                                {project.year && (
                                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 text-gray-100 text-xs sm:text-sm rounded-full border border-white/20 backdrop-blur-sm font-medium ml-2">
                                {project.year}
                                    </span>
                                )}
                            </div>

                            {/* gradient effect when a user hovers over a project grid */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>

                        {/* writing the title at the top and then the desription below */}
                        <div className="p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                {project.description}
                            </p>

                            {/* little tech badges fot the list provided */}
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                            {project.technologies.map((tech, i) => (
                                <span
                                key={i}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50 font-medium"
                                    >
                                {tech}
                                    </span> ))}
                             </div>

                            {/* buttons fot the preview and for github too */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <a
                                    href={project.previewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-sm font-medium"
                                >
                                    <ExternalLink size={14} className="mr-2" />
                                    UI Preview
                                </a>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-cyan-400/30 text-sm font-medium"
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
