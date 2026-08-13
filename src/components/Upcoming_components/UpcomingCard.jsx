const UpcomingCard = ({ project }) => {
  return (
    <div
      className="
        bg-(--bg-card)
        border border-(--border)
        rounded-2xl
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-2
        hover:border-(--primary)
        hover:shadow-2xl
      "
    >
      {/* Image */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div
          className="
            w-full h-56
            flex items-center justify-center
            bg-(--bg-secondary)
            text-(--text-muted)
            text-lg
          "
        >
          Coming Soon
        </div>
      )}

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-(--text-primary)">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-(--text-secondary) leading-7">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                px-3 py-1
                rounded-lg
                bg-(--bg-secondary)
                border border-(--border)
                text-sm
                text-(--text-secondary)
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Progress Status */}
        <div className="mt-6">
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-(--primary)/10
              border border-(--primary)/30
              text-(--primary)
              text-sm
              font-medium
            "
          >
            <span className="w-2 h-2 rounded-full bg-(--primary) animate-pulse"></span>
            In Progress
          </span>
        </div>

      </div>
    </div>
  );
};

export default UpcomingCard;