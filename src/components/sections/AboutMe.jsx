import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutMe() {
    return (
        <>
            <Header title="About Me" />
            {/*Need to add recent photo or avatar and a short bio */}
            <div className="about-me">
                <img src="../../assets/AboutMePhoto.jpg" alt="photo of developer" />
                <p>
                    FINISH ADDING BIO 
                </p>
            </div>
            <Footer />
        </>
    );
}