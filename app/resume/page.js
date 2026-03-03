import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import ResumeCard from "@/components/ui/ResumeCard";

export default function ResumePage() {
  const resumeData = [
    {
  "year": "2019-2024",
  "title": "College Education",
  "description": "Completed a Bachelor’s Degree in Computer Engineering from the University of Hong Kong in 2023."
},
{
  "year": "2024-2025",
  "title": "Dropshipping Business",
  "description": "Attempted to establish a Dropshipping Business on Shopify."
},
{
  "year": "2025-Current",
  "title": "Full Stack Developer",
  "description": "Engaged in full-stack courses for six months using online resources primarily with the MERN stack."
}
    
  ];

  return (
    <HeroContent className="pt-[70px] [@media(min-width:769px)]:pt-[125px]">
    
    {/* <div className="relative pt-[70px] px-[33px] z-[1] [@media(min-width:769px)]:pt-[125px] [@media(min-width:769px)]:pl-[128px]"> */}
     
      <HeroHeading title="Resume"/>
      <div className="space-y-[20px] w-[775px] mx-auto [@media(max-width:1024px)]:w-[calc(100%-40px)] [@media(max-width:768px)]:w-[calc(100%-24px)]">
        {resumeData.map((item, index) => (
          <ResumeCard
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    {/* </div> */}
    </HeroContent>
  );
}
