import {useState} from 'react';
import Header from './Header';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header
                name="Kristen Greene" 
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <main className="container-fluid">{renderPage()}</main>
        </div>
    );
    
}