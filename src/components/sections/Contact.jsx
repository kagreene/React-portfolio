import ContactForm from './ContactForm.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default function Contact() {
    return (
        <>
            <Header title="Contact Me" />
            <div className='container my-5'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}