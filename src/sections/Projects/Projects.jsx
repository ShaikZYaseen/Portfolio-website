import styles from './ProjectsStyles.module.css';
import wanderlust from '../../assets/wanderlust.png';
import ProjectCard from '../../common/ProjectCard';
import chess from "../../assets/chess.png"
import res from "../../assets/res.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={wanderlust}
          github="https://github.com/ShaikZYaseen/WANDERLUST-PROJECT.git"
          link="https://wanderlust-project-1-uij9.onrender.com"
          h3="Wanderlust"
          p="Hotel stay website"
        />
        <ProjectCard
        github="https://github.com/ShaikZYaseen/chess.git"
          src={chess}
          link="#"
          h3="Chess"
          p="online multiplayer game"
        />
        <ProjectCard
        github="https://github.com/ShaikZYaseen/Restaurent-Backend.git"
          src={res}
          link="#"
          h3="Restaurent"
          p="server side code"
        />
        
      </div>
    </section>
  );
}

export default Projects;
