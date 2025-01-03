import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import AboutMePhoto from '../../assets/AboutMePhoto.jpg';

export default function AboutMe() {
    return (
        <>
            <Header title="About Me" />
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img
                            src={AboutMePhoto}
                            alt="photo of developer"
                            className="img-fluid rounded-circle shadow"
                        />
                    </div>
                    <div className="col-md-8">
                        <p className="lead">
                            FINISH ADDING BIO
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
