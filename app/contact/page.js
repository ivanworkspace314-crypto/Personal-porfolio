'use client';
import HeroContent from "@/components/hero/HeroContent";
import HeroHeading from "@/components/hero/HeroHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <HeroContent className="pt-[70px] [@media(min-width:769px)]:pt-[125px]">
      <div className="flex w-full flex-col items-center gap-[26px] [@media(min-width:769px)]:gap-[47px]">
        <div className="w-full max-w-[660px] [@media(min-width:769px)]:text-left">
          <HeroHeading title="Contact Me" />
        </div>

        <div className="flex w-full max-w-[660px] justify-center">
          <ContactInfo />
        </div>

        <div className="flex w-full max-w-[660px] flex-col items-center gap-[26px]">
          <h2 className="text-center text-[28px] font-semibold text-white">
            Contact Form
          </h2>
          <ContactForm />
        </div>
      </div>
    </HeroContent>
  );
}
