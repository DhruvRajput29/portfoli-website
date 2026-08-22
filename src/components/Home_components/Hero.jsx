import profile from "../../assets/dhruv rajput.png";
import resume from "../../assets/Dhruv_Rajput_Resume.pdf";

const Hero = () => {
  const handleShare = async () => {
    const portfolioUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Dhruv Rajput - Portfolio",
          text: "Check out my portfolio!",
          url: portfolioUrl,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(portfolioUrl);
        alert("Portfolio link copied!");
      } catch (error) {
        alert("Unable to copy portfolio link.");
      }
    }
  };

  return (
    <section className=" bg-(--bg-primary) text-(--text-primary) px-6 sm:px-10 lg:px-20 py-12 flex items-center m-0 ">
      <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 ">

        {/* Left */}
        <div className="text-center lg:text-left max-w-2xl">

          <p className="text-lg sm:text-xl text-(--primary) font-medium mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Dhruv Rajput
          </h1>

          <h2
            id="typing"
            className="mt-4 text-2xl sm:text-3xl text-(--text-secondary)"
          >
            Full Stack Developer
          </h2>

          <p className="mt-8 text-(--text-secondary) text-lg leading-8">
            Passionate about building modern, responsive web applications using{" "}
            <span className="text-(--primary) font-semibold">
              React
            </span>
            ,{" "}
            <span className="text-(--primary) font-semibold">
              Node.js
            </span>
            ,{" "}
            <span className="text-(--primary) font-semibold">
              PHP
            </span>
            ,{" "}
            <span className="text-(--primary) font-semibold">
              MySQL
            </span>
            , and JavaScript.
          </p>

      

{/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

  {/* View Projects */}
  <a
    href="/projects"
    className="px-8 py-3 rounded-xl text-lg text-(--text-primary) border-2 border-(--primary) font-semibold transition-colors duration-300 hover:bg-(--primary) hover:border-(--primary) hover:text-white"
  >
    View Projects
  </a>

  {/* View Resume */}
  <a
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 rounded-xl text-lg bg-(--secondary) text-(--text-primary) border-2 border-(--secondary) font-semibold transition-colors duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
  >
    View Resume
  </a>

  {/* Share Portfolio */}
  <button
    type="button"
    onClick={handleShare}
    className="px-8 py-3 rounded-xl text-lg bg-(--accent) text-(--text-primary) border-2 border-(--accent) font-semibold transition-colors duration-300 hover:bg-green-600 hover:border-green-900 hover:text-white cursor-pointer"
  >
    Share Portfolio
  </button>

</div>


        </div>

        {/* Right */}
        <div className="flex justify-center ">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-(--primary) blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Dhruv Rajput"
              className="relative w-64 sm:w-80 lg:w-90 rounded-full border-(--primary) object-cover shadow-2xl"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;