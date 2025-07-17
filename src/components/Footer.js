import React from 'react';

// copyright and rights reserved in footer
function Footer() {
    return (
        <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-8 mt-20">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400 mb-2">
                    &copy; {new Date().getFullYear()} Anjali Bhimani. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm">
                    Built with React, Tailwind CSS, and lots of ☕
                </p>
            </div>
        </footer>
    );
}

export default Footer;
