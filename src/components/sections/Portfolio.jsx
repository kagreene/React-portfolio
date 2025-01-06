import React from 'react';
import Footer from '../Footer.jsx';
import Project from '../Project.jsx';

// Image imports
import AnimalRescueSite from '../../assets/RescueSite.jpg';
import EmployeeTracker from '../../assets/EmployeeTracker.jpg';
import VehicleBuilder from '../../assets/VehicleBuilder.jpg';
import ReadmeGenerator from '../../assets/ReadmeGenerator.jpg';
import WeatherDashboard from '../../assets/WeatherDashboard.jpg';
import BlogSite from '../../assets/Blog.jpg';

export default function Portfolio() {
    const projects = [
        {
            title: "Animal Rescue Site",
            image: AnimalRescueSite,
            github: "https://github.com/kagreene/Rescuers-down-under",
            deployed: "https://kagreene.github.io/Rescuers-down-under/",
        },
        {
            title: "Employee Tracker",
            image: EmployeeTracker,
            github: "https://github.com/kagreene/Employee_Tracker",
            deployed: "https://github.com/kagreene/Employee_Tracker",
        },
        {
            title: "Vehicle Builder",
            image: VehicleBuilder,
            github: "https://github.com/kagreene/Vehicle-builder",
            deployed: "https://github.com/kagreene/Vehicle-builder",
        },
        {
            title: "Readme Generator",
            image: ReadmeGenerator,
            github: "https://github.com/kagreene/Readme-generator",
            deployed: "https://github.com/kagreene/Readme-generator",
        },
        {
            title: "Weather Dashboard",
            image: WeatherDashboard,
            github: "https://github.com/kagreene/Weather-Dashboard",
            deployed: "",
        },
        { title: 'Blog Site',
            image: BlogSite,
            github: "https://github.com/kagreene/Blog",
            deployed: "",

        }
    ];

    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <Project
                                title={project.title}
                                image={project.image}
                                github={project.github}
                                deployed={project.deployed}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
