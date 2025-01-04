import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container text-center">
                <div className="d-flex justify-content-center gap-4 mb-3">
                    <a
                        href="https://github.com/kagreene"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kristen-greene-b74089157"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://twitter.com/greene_kristen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={30} />
                    </a>
                </div>
                <p className="mb-0">&copy; {new Date().getFullYear()} Kristen Greene. All rights reserved.</p>
            </div>
        </footer>
    );
}
