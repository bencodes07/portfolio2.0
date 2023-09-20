import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="mt-10 w-[70%] max-w-4xl grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-8 max-sm:pb-48 max-sm:ml-[-5rem]">
      <ProjectCard
        img="/placeholder-image.png"
        title="fishtrack."
        description="Lorem ipsum dolor sit amet hallo das ist eine webapplication und die ist cool"
        techstack="React, Firebase"
        liveUrl="https://fishtrack.net"
      />
      <ProjectCard
        img="/placeholder-image.png"
        title="betterwiki"
        description="Lorem ipsum dolor sit amet hallo das ist eine webapplication und die ist cool"
        techstack="React, Firebase"
        liveUrl="https://fishtrack.net"
      />
      <ProjectCard
        img="/placeholder-image.png"
        title="Portfolio"
        description="Lorem ipsum dolor sit amet hallo das ist eine webapplication und die ist cool"
        techstack="React, Firebase"
        liveUrl="https://fishtrack.net"
      />
    </div>
  );
}

export default Projects;
