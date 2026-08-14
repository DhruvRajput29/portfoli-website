import { NavLink } from "react-router-dom";

const ProjectNavbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-(--primary) font-medium"
      : "text-(--text-secondary) hover:text-(--primary) transition-colors duration-300";

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
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/upcomingprojects" className={linkClass}>
              Upcoming
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default ProjectNavbar;