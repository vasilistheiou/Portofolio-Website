import './ProjectsPage.css';
import ProjectCard from './ProjectCard/ProjectCard';
import Annotations from "../../Images/ProjectsPage/Annotations.png"
import Transportations from "../../Images/ProjectsPage/Transportations.png"

const ProjectsPage = () => {

    const projectData = [
      {
      projectTitle : "Annotation Pipeline",
      description: `As part of a team, we developed a streamlined annotation pipeline integrated with Label Studio, 
                    using React, enhancing user experience and functionality. The platform includes roles like 
                    administrators and annotators along with advanced tools for annotation agreement and semi-automatic
                    annotations.`,
      imageUrl: Annotations
      },
      {
        projectTitle : "ENIRISST Project",
        description: `As part of the ENIRISST (Intelligent Research Infrastructure for Shipping, Supply Chain, Transport and Logistics) project, 
        I was responsible for the development of three interactive web platforms aimed at visualizing complex geospatial and transportation data across Greece. 
        The platforms provided dynamic, user-friendly interfaces for exploring multi-modal transportation systems, including road traffic, railway routes, maritime transport, and air travel patterns.`,
        imageUrl: Transportations
      }  
    ]

    return (
      <div className='card-list'>
        {projectData.map((project, index) => (
            <ProjectCard key={index} props = {project} />
        ))}
      </div>
    );
};

export default ProjectsPage;
