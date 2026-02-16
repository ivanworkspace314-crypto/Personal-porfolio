import TechTag from "./TechTag";

export default function ProjectCard({
  name,
  description,
  url,
  imageUrl,
  techStacks,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full max-w-[360px] [@media(min-width:769px)]:max-w-[420px] mx-auto aspect-[4/5] border-[3px] border-[#7BE3F7] rounded-[8px] [@media(max-width:768px)]:rounded-[10px] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(123,227,247,0.3)] hover:scale-[1.02]"
    >
      <div className="flex flex-col bg-black w-full h-full">
        {/* Image Container */}
        <div className="w-full aspect-[3/2] bg-[#918E8E] overflow-hidden flex-shrink-0 mt-[10px]">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-1 flex-col gap-[13px] [@media(max-width:768px)]:gap-[16px] px-[21px] [@media(max-width:768px)]:px-[25px] pt-[13px] [@media(max-width:768px)]:pt-[16px] pb-[13px] [@media(max-width:768px)]:pb-[16px]">
          {/* URL */}
          <div className="text-[14px] [@media(max-width:768px)]:text-[17px] font-light font-['Inter'] text-white break-all">
            URL: {url}
          </div>

          {/* Project Name */}
          <h3 className="text-[24px] [@media(max-width:768px)]:text-[29px] font-semibold font-['Inter'] text-white leading-tight">
            {name}
          </h3>

          {/* Project Description */}
          <p className="text-[16px] [@media(max-width:768px)]:text-[19px] font-light font-['Inter'] text-white leading-[150%] line-clamp-5">
            {description}
          </p>
          <div className="space-x-2">
            {Array.isArray(techStacks) && techStacks.length > 0 ? (
              <div className="flex flex-wrap gap-[8px]">
                {techStacks.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            ) : null}
          </div>
        
        </div>
      </div>
    </a>
  );
}
