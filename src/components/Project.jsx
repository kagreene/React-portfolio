import React from 'react';

export default function Project({ title, image, github, deployed }) {
    return (
        <div className="project">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
            <a href={deployed} target="_blank" rel="noopener noreferrer">Deployed</a>
        </div>
    );
}