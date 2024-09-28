import React from 'react';
import project1 from '../src/assets/project 1.jpg';
import project2 from '../src/assets/project 2.jpeg';
import project3 from '../src/assets/project 3.jpeg';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
  return (
    <>
      <section id="works" className="projectsSection">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">
          I take pride in paying attention to the smallest details and making sure my work is pixel perfect. 
          I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. 
          Here are some of the projects I've worked on:
        </span>
        
        <div className="worksImgs">
          <div className="projectCard">
            <img src={project1} alt="Project 1" className="worksImg" />
            <h3>Personal Portfolio Website</h3>
            <p>A showcase of my work and skills, built using React and styled-components. The site includes responsive design features and a smooth user experience.</p>
          </div>
          <div className="projectCard">
            <img src={project2} alt="Project 2" className="worksImg" />
            <h3>Todo List App</h3>
            <p>A simple yet effective app to manage tasks. It was developed using JavaScript and local storage to save user data. This project helped enhance my understanding of CRUD operations.</p>
          </div>
          <div className="projectCard">
            <img src={project3} alt="Project 3" className="worksImg" />
            <h3>Weather App</h3>
            <p>This application fetches real-time weather data using the OpenWeather API. Built with HTML, CSS, and JavaScript, it features an intuitive user interface and dynamic content updates.</p>
          </div>
         
        </div>

       
      </section>
    </>
  );
}
