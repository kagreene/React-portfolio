import React from 'react';
import Nav from './Nav';

export default function Header({ name, currentPage, handlePageChange }) {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="display-6 mb-0">{name}</h1>
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </div>
        </header>
    );
}
