import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroDescription from "@/components/hero/HeroDescription";
import HeroCTAGroup from "@/components/hero/HeroCTAGroup";

export default function Home() {
  return (
    <main className="ml-[397px] w-[calc(100%-397px)] min-h-screen bg-black relative overflow-hidden [@media(max-width:1024px)]:ml-[280px] [@media(max-width:1024px)]:w-[calc(100%-280px)] [@media(max-width:768px)]:ml-0 [@media(max-width:768px)]:w-full [@media(max-width:768px)]:pt-[57px]">
      <HeroBackground />
      <HeroContent>
        <HeroHeading title="Hi, I'm Ivan Lo" subtitle="Mern Stack Developer" />
        <HeroDescription>
          Creating Seamless user experiences through innovation mern stack
          development. Building responsive and dynamic web application and
          mobile application for the modern digital world.
        </HeroDescription>
        <HeroCTAGroup primaryLabel="Hire Me" secondaryLabel="Let's Talk" />
      </HeroContent>
    </main>
  );
}
