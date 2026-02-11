import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const projectsData = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with shopping cart, product catalog, and payment integration using Next.js, React, and Stripe API.",
      url: "https://example-ecommerce.com",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9cf7f81645725f2026812585355ed3c93c1776d?width=600",
    },
    {
      id: 2,
      name: "Portfolio Website",
      description:
        "Modern responsive portfolio website showcasing projects and skills with smooth animations, dark mode support, and SEO optimization.",
      url: "https://portfolio-example.com",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9cf7f81645725f2026812585355ed3c93c1776d?width=600",
    },
    {
      id: 3,
      name: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, user authentication, task scheduling, and progress tracking features.",
      url: "https://tasks-example.com",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9cf7f81645725f2026812585355ed3c93c1776d?width=600",
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard with real-time data visualization, custom charts, and detailed reporting capabilities for business metrics.",
      url: "https://analytics-example.com",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9cf7f81645725f2026812585355ed3c93c1776d?width=600",
    },
    {
      id: 5,
      name: "Mobile Weather App",
      description:
        "iOS and Android weather application with real-time forecasts, location services, weather alerts, and detailed weather information.",
      url: "https://weather-example.com",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9cf7f81645725f2026812585355ed3c93c1776d?width=600",
    },
    {
      id: 6,
      name: "Social Media Platform",
      description:
        "Feature-rich social network with user profiles, real-time messaging, post feeds, notifications, and community engagement tools.",
      url: "https://social-example.com",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9cf7f81645725f2026812585355ed3c93c1776d?width=600",
    },
  ];

  return (
    <HeroContent className="pt-[70px] [@media(min-width:769px)]:pt-[125px]">
      <HeroHeading title="Projects" />
      
      {/* Projects Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[20px] [@media(min-width:769px)]:gap-[24px] [@media(max-width:768px)]:px-[20px]">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            url={project.url}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </HeroContent>
  );
}
