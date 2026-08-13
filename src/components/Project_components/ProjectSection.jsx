import projects from "../../data/Projects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-(--bg-primary) px-6 pb-20 min-h-full"
    >
      <div className="max-w-7xl mx-auto ">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectSection;