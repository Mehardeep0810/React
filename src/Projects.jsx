import React from 'react';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    title: 'Loewy Design',
    image: 'https://www.queness.com/resources/images/coolw/4.jpg',
    // 'src/components/project1.png'
    description: 'This is a website for a design agency, it has some pretty cool javascript effect all over the website!',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    title: 'Toasted Digital',
    image: 'http://www.queness.com/resources/images/coolw/8.jpg',
    description: 'Toasted digital is trying to kill flash. :p You have to see how the page load,the simple animation in the front page and cool transition effect in different pages. One complaint though, they really need to remove the Anchor tag outline for the Nav, it ruins it!',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Giphy Website',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFNWRkcYTlaqyF0iOhuDuUOli85pNFXjXAIithmQM3CrwxCuC-YqQm-iQ5wDrrtK_oGI&usqp=CAU',
    description: 'It is a website clone which fetches the gifs with the help of giphy api with the help of giphy developer website.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  // Add more projects...
];

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
