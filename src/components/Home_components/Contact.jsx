const Contact = () => {
  const contacts = [
    {
      name: "dhruvrajput412@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=dhruvrajput412@gmail.com",
      icon: (
        <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="red"
              color="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5.5C3 4.67 3.67 4 4.5 4H19.5C20.33 4 21 4.67 21 5.5V18.5C21 19.33 20.33 20 19.5 20H4.5C3.67 20 3 19.33 3 18.5V5.5Z"
                fill="white"
              />
              <path
                d="M3 6L12 13L21 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18L8.5 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M21 18L15.5 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
      ),
    },

    {
      name: "GitHub",
      link: "https://github.com/DhruvRajput29",
      icon: (
        <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
      ),
    },

    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/dhruv-rajput-29feb2006/",
      icon: (
       <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#0A66C2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.45 20.45H16.89V14.87C16.89 13.54 16.86 11.83 15.04 11.83C13.19 11.83 12.91 13.27 12.91 14.77V20.45H9.35V8.99H12.77V10.55H12.82C13.3 9.65 14.46 8.7 16.19 8.7C19.79 8.7 20.45 11.07 20.45 14.15V20.45Z" />
              <path d="M5.34 7.43C4.19 7.43 3.27 6.5 3.27 5.36C3.27 4.22 4.19 3.29 5.34 3.29C6.48 3.29 7.41 4.22 7.41 5.36C7.41 6.5 6.48 7.43 5.34 7.43Z" />
              <path d="M3.56 20.45H7.13V8.99H3.56V20.45Z" />
            </svg>
      ),
    },

    {
      name: "WhatsApp",
      link: "https://wa.me/918347155743",
      icon: (
          <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L.03 24l6.25-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.47-8.42ZM12.06 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.30c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.89-9.91 9.89Z" />
              <path d="M17.48 14.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.30.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="bg-(--bg-primary) py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-(--text-primary)">
          Contact Me
        </h2>

        <p className="text-center text-(--text-secondary) mt-4 mb-12">
          Feel free to connect with me through any of the platforms below.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl border border-(--border) bg-(--bg-card) hover:bg-gray-800 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl text-(--primary) group-hover:text-(--text-primary)">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-(--text-primary)">
                {item.name}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;