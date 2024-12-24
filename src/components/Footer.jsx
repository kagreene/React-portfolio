import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="https://github.com/kagreene" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/kristen-greene-b74089157" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                </a>
            </div>
        </footer>
    );
}