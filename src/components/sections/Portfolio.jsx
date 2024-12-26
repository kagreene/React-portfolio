import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
export default function Portfolio() {
    return (
        <>
            <Header title="Portfolio" />
            {/* Group project 1
            if we can do non-deployed apps, include 
            vehicle-builder, employee-tracker,
            can include readme generator, MAYBE weather-dashboard, and week 1 project if there is nothing better
             */}
            <Project
                title="Animal Rescue Site"
                image="../assets/RescueSite.jpg"
                github="https://github.com/kagreene/Rescuers-down-under"
                deployed="https://kagreene.github.io/Rescuers-down-under/"
            />

            <Footer />
        </>
    );
}
