import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Resume() {
    return (
        <>
            <Header title="Resume" />
            {/* Add actual link to download resume*/}
            <div className="resume-content">
                <a href="/path/to/your-resume.pdf" download>
                    Download Resume
                </a>
                <h2>Proficiencies</h2>
                <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>SQL</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>HTML/CSS</li>
                    {/* Add more proficiencies */}
                </ul>
            </div>
            <Footer />
        </>
    );
}


