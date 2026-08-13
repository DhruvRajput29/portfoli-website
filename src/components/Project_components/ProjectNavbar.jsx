const ProjectNavbar = () => {
  return (
    <nav className="bg-(--bg-primary) px-6 py-6 border-b border-(--border)">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-(--text-primary)">
          dhruv-rajput
        </div>

        {/* Navigation */}
        <ul className="flex text-lg items-center gap-8">
          <li>
            <a
              href="/"
              className="text-(--text-secondary) hover:text-(--primary) transition-colors duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/projects"
              className="text-(--primary) font-medium"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/upcomingprojects"
              className="text-(--text-secondary) hover:text-(--primary) transition-colors duration-300"
            >
              Upcoming
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default ProjectNavbar;