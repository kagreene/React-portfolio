import ContactForm from './ContactForm.jsx';
import Footer from '../Footer.jsx';

export default function Contact() {
    return (
        <>
            <div className='container-fluid my-5'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ContactForm />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center mb-4">
                        <h2>My Contact Info</h2>
                        <p>
                            Email:{" "}
                            <a
                                href="kristengreene2023u.northwestern.edu"
                                className="text-primary"
                            >
                                kristengreene2023u.northwestern.edu
                            </a>
                        </p>
                        <p>
                            Phone Number:{" "}
                            <a
                                href="9377230470"
                                className="text-primary"
                            >
                                937-723-0470
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}