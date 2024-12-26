import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 bottom-0 w-full border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                <nav className="mt-2 md:mt-0">
                    <a href="/about" className="text-gray-300 mx-2 hover:text-white transition-colors duration-200">About</a>
                    <a href="/contact" className="text-gray-300 mx-2 hover:text-white transition-colors duration-200">Contact</a>
                    <a href="/privacy" className="text-gray-300 mx-2 hover:text-white transition-colors duration-200">Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
