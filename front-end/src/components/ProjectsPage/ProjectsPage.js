import React from 'react';
import './ProjectsPage.css';
import './ProjectCard/ProjectCard'
import ProjectCard from './ProjectCard/ProjectCard';
import testImage from "../../Images/test.png"

const ProjectsPage = () => {

    const projectData = [
      {
      projectTitle : "Annotation Pipeline",
      description: `As part of a team, we developed a streamlined annotation pipeline integrated with Label Studio, 
                    using React, enhancing user experience and functionality. The platform includes roles like 
                    administrators and annotators along with advanced tools for annotation agreement and semi-automatic
                    annotations.`,
      imageUrl: testImage
      },
      {
        projectTitle : "Map Websites",
        description: "Lorem Ipsum2.....",
        imageUrl: testImage
      },
      {
        projectTitle : "Task Tracker Application",
        description: "Lorem Ipsum3.....",
        imageUrl: testImage
      }
    ]

    // const data= {
    //   projectTitle : "Annotation Pipeline",
    //   description: "Lorem Ipsum....."
    // }

    return (
      <div className='card-list'>
          {/* <ProjectCard props = {data}/> */}
        {projectData.map((project, index) => (
            <ProjectCard key={index} props = {project} />
        ))}
      </div>
    );
};

export default ProjectsPage;
