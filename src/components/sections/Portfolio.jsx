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
            <Project
                title="Employee Tracker"
                image="../assets/EmployeeTracker.jpg"
                github="https://github.com/kagreene/Employee_Tracker"
                deployed="https://github.com/kagreene/Employee_Tracker"
            />
            <Project
                title="Vehicle Builder"
                image="../assets/VehicleBuilder.jpg"
                github="https://github.com/kagreene/Vehicle-builder"
                deployed="https://github.com/kagreene/Vehicle-builder"
            />
            <Project 
                title="Readme Generator"
                image="../assets/ReadmeGenerator.jpg"
                github="https://github.com/kagreene/Readme-generator"
                deployed="https://github.com/kagreene/Readme-generator"
            />


            <Footer />
        </>
    );
}
