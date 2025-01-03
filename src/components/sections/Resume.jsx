import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default function Resume() {
    return (
        <>
            <Header title="Resume" />
            <div className="container my-5">
                <div className="row">
                    <div className="text-center mb-4">
                        <a
                            href="../../assets/KGResume.pdf"
                            download
                            className="btn btn-primary"
                        >
                            Download Resume
                        </a>
                    </div>
                    <h2 className="text-center mb-4">Proficiencies</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">SQL</li>
                                <li className="list-group-item">TypeScript</li>
                                <li className="list-group-item">Node.js</li>
                                <li className="list-group-item">HTML/CSS</li>
                                {/* Add more proficiencies */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


