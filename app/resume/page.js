import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import ResumeCard from "@/components/ui/ResumeCard";

export default function ResumePage() {
  const resumeData = [
    {
      year: "2019-2023",
      title: "College Education",
      description:
        "Completed Bachelor Degree in Computer Engineering from University in 2023",
    },
    {
      year: "2023-2024",
      title: "Dropshipping Business",
      description: "Owned Dropshipping Business on Shopify",
    },
    {
      year: "2024-Current",
      title: "Full Stack Developer",
      description:
        "Engaged in full-stack courses for 6 months from online resources, currently working as a freelance Web Developer primarily with MERN Stack.",
    },
    
  ];

  return (
    <main className="relative min-h-screen bg-black ml-0 [@media(min-width:769px)]:ml-[397px] [@media(min-width:769px)]:w-[calc(100%-397px)] overflow-hidden">
      <HeroBackground />
      <HeroContent className="pt-[70px] [@media(min-width:769px)]:pt-[125px]">
      
      {/* <div className="relative pt-[70px] px-[33px] z-[1] [@media(min-width:769px)]:pt-[125px] [@media(min-width:769px)]:pl-[128px]"> */}
       
        <HeroHeading title="Resume"/>
        <div className="space-y-[20px] w-[775px] [@media(max-width:1024px)]:w-[calc(100%-66px)] [@media(max-width:768px)]:w-[calc(100%-48px)]">
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
    </main>
  );
}
