import React from 'react';
import './Project.css'; // Custom styles for the Project component

export default function Project({ title, image, github, deployed }) {
    return (
        <div className="card project-card">
            <div className="card-img-container">
                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                />
                <div className="overlay">
                    <a
                        href={deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-title"
                    >
                        {title}
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
