const ProjectHero = () => {
  return (
    <section className="bg-(--bg-primary) px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-(--text-primary)">
          My Projects
        </h1>

        <p className="mt-6 text-lg leading-8 text-(--text-secondary)">
          Here are some of the projects I have built while learning web
          development, Node.js, databases and software engineering.
        </p>

      </div>
    </section>
  );
};

export default ProjectHero;