import "../Styles/Projects.css";
import { projectsInfo } from "../Assets/Data/projectsInfo";
import Project from "./Project";

function Projects(){
    return(
        <div id="projects"  className="projects-section">
            <div className="project-title" >Projects</div>
            <div className="project-filter" >
                <button>All</button>
                <button>javascript</button>
                <button>react</button>
                <button>node.js</button>
            </div>
            <div className="projects-container">
            {
                projectsInfo.map((project,index)=>{
                    return <Project data={project} key={index} />
                })
            }
            </div>

        </div>
    );
}

export default Projects;