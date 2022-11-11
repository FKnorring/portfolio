import { FaGithub } from "react-icons/fa";

function Project({ projects, project }) {
   const { title, description, image, link, logo } = projects[project];
   return (
      <div className="card">
         <div className="title-logo">
            <h1>{title}</h1>
            <img className="logo" src={logo} alt="logo" />
         </div>
         <div className="row">
            <div className="column">
               <p>{description}</p>
            </div>
            <div className="column">
               <img width={300} src={image} alt={title} />
            </div>
         </div>

         <a className="button" href={link} target="_blank" rel="noreferrer">
            View Project
            <FaGithub size={20} />
         </a>
      </div>
   );
}

export default Project;
