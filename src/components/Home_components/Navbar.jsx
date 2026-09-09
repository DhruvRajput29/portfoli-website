import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about", type: "section" },
    { name: "Skills", href: "#skills", type: "section" },
    { name: "Projects", href: "/projects", type: "route" },
    { name: "Resume", href: "#resume", type: "section" },
    { name: "Contact", href: "#contact", type: "section" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-(--bg-primary) border-b border-(--border) backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Navbar */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-bold text-(--text-primary) hover:text-(--primary) transition-colors duration-300"
          >
            Dhruv Rajput
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                {link.type === "route" ? (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative text-lg transition duration-300 ${
                        isActive
                          ? "text-(--primary)"
                          : "text-(--text-secondary) hover:text-(--primary)"
                      } after:absolute after:left-0 after:-bottom-1 after:h-0.5
                      after:bg-(--primary) after:transition-all ${
                        isActive
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <a
                    href={link.href}
                    className="relative text-lg text-(--text-secondary)
                    hover:text-(--primary) transition duration-300
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5
                    after:w-0 after:bg-(--primary) after:transition-all
                    hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-(--text-primary) hover:text-(--primary) transition-colors duration-300"
          >
            {menuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden pb-6"
          >
            <ul className="flex flex-col gap-4 rounded-xl bg-(--bg-card) border border-(--border) p-6">

              {links.map((link) => (
                <li key={link.name}>
                  {link.type === "route" ? (
                    <NavLink
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 transition-colors duration-300 ${
                          isActive
                            ? "bg-(--primary) text-(--text-primary)"
                            : "text-(--text-secondary) hover:bg-(--primary) hover:text-(--text-primary)"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 text-(--text-secondary)
                      transition-colors duration-300
                      hover:bg-(--primary)
                      hover:text-(--text-primary)"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;