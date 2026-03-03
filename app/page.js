import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import Paragraph from "@/components/hero/Paragraph";
import HeroCTAGroup from "@/components/hero/HeroCTAGroup";

export default function Home() {
  return (
    <HeroContent>
      <HeroHeading title="Hi, I'm Ivan Lo" subtitle="Mern Stack Developer" />
      <Paragraph>
Welcome to my portfolio! I'm Ivan from Hong Kong <span className="text-[1.3em] inline-block">🇭🇰</span>, 
a web developer with 4+ years of programming experience and 6 months in MERN stack development. I specialize in creating dynamic, user-friendly applications using MongoDB, Express.js, React, and Node.js. Let's build something amazing together!

      </Paragraph>
      <HeroCTAGroup primaryLabel="Hire Me" secondaryLabel="Let's Talk" />
    </HeroContent>
  );
}
