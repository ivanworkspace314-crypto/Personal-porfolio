import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroDescription from "@/components/hero/HeroDescription";
import HeroCTAGroup from "@/components/hero/HeroCTAGroup";

export default function Home() {
  return (
    <HeroContent>
      <HeroHeading title="Hi, I'm Ivan Lo" subtitle="Mern Stack Developer" />
      <HeroDescription>
        Creating Seamless user experiences through innovation mern stack
        development. Building responsive and dynamic web application and
        mobile application for the modern digital world.
      </HeroDescription>
      <HeroCTAGroup primaryLabel="Hire Me" secondaryLabel="Let's Talk" />
    </HeroContent>
  );
}
