import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const refPortfolio = useRef(null);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // Simuler une requête API pour récupérer la liste de vos projets
    setTimeout(() => {
      const mockProjects = [
        {
          id: 1,
          title: 'Projet 1',
          description: 'Description du projet 1',
          image: 'image1.jpg', // Ajoutez le chemin de votre image
        },
        {
          id: 2,
          title: 'Projet 2',
          description: 'Description du projet 2',
          image: 'image2.jpg', // Ajoutez le chemin de votre image
        },
        // Ajoutez plus de projets ici
      ];
      setProjects(mockProjects);
      refPortfolio.current.classList.remove('startingImg');
    }, 1000);

    // Simuler une requête API pour récupérer votre expérience
    setTimeout(() => {
      const mockExperience = [
        {
          id: 1,
          title: 'Développeur Front-end',
          company: 'Entreprise A',
          year: '2019 - 2021',
        },
        {
          id: 2,
          title: 'Développeur Back-end',
          company: 'Entreprise B',
          year: '2017 - 2019',
        },
        // Ajoutez plus d'expériences ici
      ];
      setExperience(mockExperience);
    }, 1500);
  }, []);

  return (
    <main ref={refPortfolio} className="container portfolioPage">
      <header className="text-center my-5">
        <h1>Votre Portfolio</h1>
        <h2 className="mb-4">Développeur Web</h2>
      </header>
      <section>
        <h2>Projets</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Expérience</h2>
        <ul className="list-group">
          {experience.map((job) => (
            <li key={job.id} className="list-group-item">
              <h3>{job.title}</h3>
              <p>
                {job.company} ({job.year})
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        {/* Ajoutez vos informations de contact ici */}
      </section>
    </main>
  );
};

export default Portfolio;
