import UpcomingProjects from "../../data/UpcomingProjects";
import UpcomingCard from "./UpcomingCard";

const Upcoming = () => {
  return (
    <section className="min-h-screen bg-(--bg-primary) px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-(--text-primary)">
            Upcoming Projects
          </h1>

          <p className="mt-4 text-(--text-secondary)">
            Projects that I am currently working on.
          </p>
        </div>

        {/* Projects */}
        {UpcomingProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UpcomingProjects.map((project) => (
              <UpcomingCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          /* No Upcoming Projects */
          <div className="min-h-100 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">
              🚀
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-(--text-primary)">
              No Upcoming Projects
            </h2>

            <p className="mt-4 max-w-lg text-(--text-secondary) leading-7">
              I'm currently not working on any new projects.
              Check back later for something new!
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Upcoming;