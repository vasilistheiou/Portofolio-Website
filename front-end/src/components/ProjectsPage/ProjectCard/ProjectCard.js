import './ProjectCard.css';

const ProjectCard = ({props}) => {
    const {projectTitle, description, imageUrl} = props

    return (
        <div className="card">
            <img src={imageUrl} alt={projectTitle} className="card-image" />
            <div className='card-content'>
                <p className="card-title"> {projectTitle}</p>
                <p className= "card-subtitle">Description:</p>
                <p className='card-description'>{description}</p>
                {/* <div className="button-wrapper">
                    <button className="card-button">View Details</button>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectCard;
