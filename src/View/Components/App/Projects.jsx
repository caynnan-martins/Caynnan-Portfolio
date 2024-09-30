import React from 'react';

const projects = [
  {
    id: 1,
    title: "Cyze Cloud",
    description: "O projeto realizado com React e Tailwind é uma aplicação que desenvolvi com um dashboard completo e uma API em JavaScript, oferecendo uma interface intuitiva para gerenciar serviços de hospedagem.",
    imageUrl: "./public/cyze.PNG",
    link: "https://cyze.cloud/",
  },
  {
    id: 2,
    title: "BlackSmith",
    description: "O projeto Blacksmith é uma aplicação onde desenvolvi o front-end com HTML e CSS e implementei uma API em JavaScript para envio de e-mails, proporcionando uma interface intuitiva e funcional.",
    imageUrl: "./public/blacksm.PNG",
    link: "https://blacksmithpainting.com/",
  },
  {
    id: 3,
    title: "CrEnglish",
    description: "A plataforma de aprendizado de inglês é um projeto que desenvolvi em equipe, com um dashboard completo e uma API em PHP, utilizando MVC, proporcionando uma interface intuitiva para gerenciar cursos.",
    imageUrl: "./public/cren.PNG",
    link: "https://crenglish.site/",
  },
  {
    id: 4,
    title: "AnimesGG",
    description: "A plataforma de animes é um projeto que desenvolvi em equipe, utilizando Node.js e React com Tailwind CSS, apresentando um design moderno e responsivo, além de uma API robusta para gerenciar informações e interações dos usuários.",
    imageUrl: "https://drive.google.com/file/d/1xAfm8MVjm4EiFstndts0V-NdyBWl9WDy/view?usp=sharing",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-[#141e27] py-12" id='projetos'>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(project => (
            <div key={project.id} className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="rounded-t-lg h-40 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </a>
              <div className="p-5">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Saiba Mais
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
