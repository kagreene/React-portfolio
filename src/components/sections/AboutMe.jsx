import Footer from '../Footer.jsx';
import AboutMePhoto from '../../assets/AboutMePhoto.jpg';

export default function AboutMe() {
    return (
        <>
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
                            My name is Kristen Greene. I am a 26 year old living in Chicago, Illinois. I have an undergraduate degree in Chemistry and a Master's in Chemical Engineering. I am currently a student at Northwestern University's Software Development Bootcamp. I also work part time as an after-school STEAM mentor for kids and volunteer at an animal shetler. 
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
