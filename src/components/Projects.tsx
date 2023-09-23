import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="mt-10 w-[70%] max-w-4xl grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-8 max-sm:pb-48 max-sm:ml-[-5rem]">
      <ProjectCard
        img="/fishtrack.png"
        title="fishtrack."
        description="fishtrack is a web application designed for fishing enthusiasts to track and manage their fishing catches."
        techstack="React, Firebase, Tailwind"
        liveUrl="https://fishtrack.net"
      />
      <ProjectCard
        img="/betterwiki.png"
        title="betterwiki"
        description="betterwiki makes it easy to find and read Wikipedia articles in a distraction-free environment."
        techstack="React, Wikipedia API"
        liveUrl="https://github.com/bencodes07/betterwiki"
      />
      <ProjectCard
        img="/portfolio.png"
        title="Portfolio"
        description="The Portfolio you are looking at right now! I really hope you like it :D"
        techstack="NextJS, Tailwind, TS"
        liveUrl="https://fishtrack.net"
      />
    </div>
  );
}

export default Projects;
