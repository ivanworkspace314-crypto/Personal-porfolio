import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const projectsData = [
    {
      id: 0,
      name: "My Portfolio Website",
      description:
        "A portfolio website that showcases my skills, previous project and myself",
      imageUrl: "/projectImages/myportfolio.png",
      techStacks: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 1,
      name: "Dev Events",
      description:
        "An event management platform with admin tools to publish events, view events and reservations.",
      url: "https://dev-event-app-sigma.vercel.app/",
      imageUrl: "/projectImages/eventApp.png",
      techStacks: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Cloudinary"],
    },
    {
      id: 2,
      name: "Movie Discovery Application",
      description:
        "A responsive movie discovery app that lets users search films with keywords and year of publish",
      url: "https://movie-discovery-web-app-movie-app.onrender.com/",
      imageUrl: "/projectImages/movieApp.png",
      techStacks: ["React", "Tailwind CSS", "TMDB API"],
    },
    {
      id: 3,
      name: "News Explorer Application",
      description:
        "A responsive news app built with Next.js that showcases featured stories, archives by year, and detailed article pages with dynamic routing and image views.",
      url: "https://news-app-next-js-2mhe.vercel.app/news",
      imageUrl: "/projectImages/newsApp.png",
      techStacks: ["Next.js", "React", "Node.js", "Docker"],
    },
    {
      id: 4,
      name: "Product Catalog Manager",
      description:
        "A full-stack product catalog app for browsing, creating, and editing items in a responsive UI.",
      url: "https://productcatalogwebsite-4.onrender.com/",
      imageUrl: "/projectImages/productStore.png",
      techStacks: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        
      ],
    },
    {
      id: 5,
      name: "ThinkBoard",
      description:
        "My first Mern stack application, simple note-taking app with CRUD operations.",
      url: "https://thinkboard-1s0i.onrender.com/",
      imageUrl: "/projectImages/thinkboard2.png",
      techStacks: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB"]
    },
  ];

  return (
    <HeroContent className="pt-[70px] [@media(min-width:769px)]:pt-[125px]">
      <HeroHeading title="Projects" />

      {/* Projects Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-[20px] [@media(min-width:769px)]:gap-[24px] [@media(max-width:768px)]:px-[20px]">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            url={project.url}
            imageUrl={project.imageUrl}
            techStacks={project.techStacks}
          />
        ))}
      </div>
    </HeroContent>
  );
}
