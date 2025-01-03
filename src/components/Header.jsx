import React from 'react';

export default function Header({ title }) {
    return (
        <header className="bg-dark text-white py-4">
            <div className="container">
                <div className="text-center mt-3">
                    <h1 className="display-4">{title}</h1>
                </div>
            </div>
        </header>
    );
}

