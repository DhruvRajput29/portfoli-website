const About = () => {
  const techskills = [
    "React",
    "Node.js",
    "PHP",
    "JavaScript",
    "MySQL",
    "Git",
    "GitHub"];
  return (
    <section
      id="about"
      className="bg-(--bg-primary) py-12 px-6 md:px-12 md:m-0 lg:px-18 lg:m-0 flex justify-center"
    >
      <div className="max-w-6xl w-full m-0 p-0">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-(--text-primary)">
          About Me
        </h2>

        <p className="text-center text-(--text-secondary) mt-4 max-w-3xl mx-auto leading-8">
          I am a
          <span className="text-(--primary)-semibold">
            {" "}BCA student{" "}
          </span>
          passionate about creating responsive and modern web applications.
          I enjoy turning ideas into real-world projects using
          <span className="text-(--primary)-semibold ">
            {" "}React, Node.js, PHP, and MySQL.
          </span>
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* Education */}
          <div className="bg-(--bg-card) border border-(--border)-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--primary) mb-5">
              Education
            </h3>

            <p className="text-(--text-secondary) leading-7">
              Bachelor of Computer Applications (BCA)
              <br />
              Sutex College of Computer Application & Science
            </p>
          </div>

          {/* Interests */}
          <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--primary) mb-5">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {techskills.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-(--border) text-(--text-secondary) hover:bg-(--primary) hover:text-white transition text-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="bg-(--bg-card) border border-(--border)-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--primary) mb-5">
              Current Goal
            </h3>

            <p className="text-(--text-secondary) leading-7">
              Building high-quality projects, improving problem-solving skills,
              and securing a Full Stack Developer internship.
            </p>
          </div>

          {/* Location */}
          <div className="bg-(--bg-card) border-(--border) rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-(--primary) mb-5">
              Location
            </h3>

            <p className="text-(--text-secondary) leading-7">
              📍 Surat, Gujarat, India
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;