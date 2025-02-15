import React from 'react';
import Footer from '../Footer.jsx';
import Project from '../Project.jsx';

// Image imports
import AnimalRescueSite from '../../assets/RescueSite.jpg';
//import EmployeeTracker from '../../assets/EmployeeTracker.jpg';
//import VehicleBuilder from '../../assets/VehicleBuilder.jpg';
//import ReadmeGenerator from '../../assets/ReadmeGenerator.jpg';
import WeatherDashboard from '../../assets/WeatherDashboard.jpg';
import BlogSite from '../../assets/Blog.jpg';
import CandidateSearch from '../../assets/CandidateSearch.jpg';
import KanbanBoard from '../../assets/KanbanBoard.jpg';
import WeatherBlitz from '../../assets/WeatherBlitz.jpg';

export default function Portfolio() {
    const projects = [
        {
            title: "Animal Rescue Site",
            image: AnimalRescueSite,
            github: "https://github.com/kagreene/Rescuers-down-under",
            deployed: "https://kagreene.github.io/Rescuers-down-under/",
        },
        {
            title: "Candidate Search App",
            image: CandidateSearch,
            github: "https://github.com/kagreene/candidate_search  ",
            deployed: "https://candidate-search-yp0p.onrender.com/ ",
        },
        {
            title: "Kanban Board",
            image: KanbanBoard,
            github: "https://github.com/kagreene/kanban",
            deployed: "https://kanban-7w1m.onrender.com/",
        },
        {
            title: "Weather Blitz",
            image: WeatherBlitz,
            github: "https://github.com/kagreene/bootstacks",
            deployed: "https://weatherblitz.onrender.com/ ",
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
