const ProjectCard = ({ project }) => {
  return (
    <div className="group rounded-2xl overflow-hidden border border-(--border) bg-(--bg-card) transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-(--text-primary)">
          {project.title}
        </h3>

        <p className="mt-4 text-(--text-secondary) leading-7">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-(--primary)/10 text-(--primary) border border-(--primary)/20"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-7">

          {/* GitHub Button */}
          {project.github.enabled && (
            <a
              href={project.github.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-(--primary) text-(--text-primary) font-medium transition-colors duration-300 hover:bg-(--primary-hover)"
            >
              GitHub
            </a>
          )}

          {/* Live Demo Button */}
          {project.demo.enabled && (
            <a
              href={project.demo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-(--primary) text-(--primary) font-medium transition-colors duration-300 hover:bg-(--primary) hover:text-(--text-primary)"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;