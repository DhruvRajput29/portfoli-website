import resume from "../../assets/Dhruv_Rajput_Resume.pdf";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-(--bg-primary) py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">

        <div className="bg-(--bg-card) border border-(--border) rounded-3xl shadow-xl p-8 md:p-12 text-center">

          {/* PDF Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-(--bg-secondary) flex items-center justify-center">
              <FaFilePdf className="text-5xl text-(--primary)" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-(--text-primary)">
            Resume
          </h2>

          {/* Description */}
          <p className="mt-5 text-(--text-secondary) text-lg leading-8 max-w-2xl mx-auto">
            Interested in my work? View or download my latest resume to learn
            more about my education, technical skills, and projects.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-(--text-primary) font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaFilePdf />
              View Resume
            </a>

            <a
              href={resume}
              download
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-(--text-primary) transition-all duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;