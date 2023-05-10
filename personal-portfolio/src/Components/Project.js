import { useEffect } from "react";
import "../Styles/Project.css";

function Project({data}){

 
    return(
        <div className="project-card-container" >
            <img className="project-card-image" src={data.image} alt="" />
            <div className="project-card-tech-stack" >{data.techStack.join(", ")}</div>
            <div className="project-card-title" >{data.name}</div>
            <div className="project-card-description" >{data.description}</div>
            <div className="project-card-buttons" >
                <button>Code</button>
                <button>Live Preview</button>
            </div>
        </div>
    );
}

export default Project;