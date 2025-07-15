import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [headerVisible, setHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolled(currentScrollY > 50);

            // Hide/show header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }

            setLastScrollY(currentScrollY);

            // Update active section
            const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerVisible ? 'translate-y-0' : '-translate-y-full'
            } ${scrolled
                ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-lg'
                : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-lg md:text-2xl font-sans text-white hover:text-cyan-400 transition-colors duration-300 group"
                    >
                        <span className="hidden sm:inline">Anjali Bhimani</span>
                        <span className="sm:hidden">AB</span>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg ${activeSection === item.id
                                            ? 'text-cyan-400 bg-cyan-400/10'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-400 transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                        }`}></span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
                        ? 'max-h-80 opacity-100 mt-4'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left font-medium transition-all duration-300 px-3 py-2 rounded-lg ${activeSection === item.id
                                                ? 'text-cyan-400 bg-cyan-400/10'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;