import React from 'react';
import Nav from './Nav';

export default function Header({ title}) {
    return (
        <header className='header'>
            <Nav />
            <div className="header-content">
                <h1>{title}</h1>
            </div>
        </header>
    );
}

