'use client';

import HeroContent from '@/components/hero/HeroContent';
import HeroHeading from '@/components/hero/HeroHeading';
import SkillCard from '@/components/ui/SkillCard';

const skillsData = [
  {
    name: 'HTML + CSS + JavaScript',
    percentage: 85,
    borderColor: '#7BE3F7',
    progressColor: '#7BE3F7',
    icon: (
      <svg
        width="35"
        height="49"
        viewBox="0 0 35 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_42_184)">
          <path
            d="M34.9392 9.60536L31.7617 44.9451L17.4787 48.8762L3.23505 44.9505L0.0608521 9.60536H34.9392Z"
            fill="#E44D26"
          />
          <path
            d="M17.5 45.8713L29.0414 42.6947L31.7566 12.4953H17.5V45.8713Z"
            fill="#F16529"
          />
          <path
            d="M11.323 21.1653H17.5V16.8304H6.55115L6.6556 17.9933L7.72884 29.9393H17.5V25.6043H11.7221L11.323 21.1653ZM12.3071 32.1068H7.92394L8.53562 38.9133L17.4799 41.3783L17.5 41.3728V36.8627L17.4809 36.8677L12.618 35.5641L12.3071 32.1068Z"
            fill="#EBEBEB"
          />
          <path
            d="M3.30585 0H5.52479V2.1765H7.55466V0H9.77374V6.59098H7.55479V4.38394H5.52493V6.59098H3.30598L3.30585 0ZM12.6916 2.18573H10.7384V0H16.8653V2.18573H14.9109V6.59098H12.692V2.18573H12.6916ZM17.8377 0H20.1514L21.5746 2.31589L22.9965 0H25.3111V6.59098H23.1012V3.32413L21.5746 5.66758H21.5363L20.0088 3.32413V6.59098H17.8377V0ZM26.4154 0H28.6351V4.41244H31.7555V6.59098H26.4153L26.4154 0Z"
            fill="black"
          />
          <path
            d="M17.485 29.9393H22.8617L22.3548 35.5614L17.4848 36.8663V41.3762L26.4362 38.9133L26.5018 38.1809L27.5281 26.7684L27.6346 25.6043H17.485V29.9393ZM17.485 21.1547V21.1653H28.0319L28.1194 20.191L28.3184 17.9933L28.4227 16.8304H17.485V21.1547Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_42_184">
            <rect width="35" height="49" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: 'MERN: MongoDB + Express.js + React.js + Node.js',
    percentage: 95,
    borderColor: '#7BE3F7',
    progressColor: '#7BE3F7',
    icon: (
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/bf0d9bc63918964667c4a2503e96f8d081124951?width=106"
        alt="MERN Stack"
        width={53}
        height={53}
      />
    ),
  },
  {
    name: 'Next.js',
    percentage: 95,
    borderColor: '#7BE3F7',
    progressColor: '#7BE3F7',
    icon: (
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 0.5C47.8447 0.5 61.5 14.1553 61.5 31C61.5 47.8447 47.8447 61.5 31 61.5C14.1553 61.5 0.5 47.8447 0.5 31C0.5 14.1553 14.1553 0.5 31 0.5Z"
          fill="black"
          stroke="white"
        />
        <path
          d="M51.4972 54.257L23.8156 18.6H18.6V43.3897H22.7725V23.8987L48.2219 56.78C49.3702 56.0113 50.4643 55.168 51.4972 54.257Z"
          fill="url(#paint0_linear_43_52)"
        />
        <path
          d="M43.7446 18.6H39.6113V43.4H43.7446V18.6Z"
          fill="url(#paint1_linear_43_52)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_43_52"
            x1="37.5444"
            y1="40.1278"
            x2="49.7722"
            y2="55.2833"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_43_52"
            x1="41.678"
            y1="18.6"
            x2="41.6088"
            y2="36.8126"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    percentage: 75,
    borderColor: '#7BE3F7',
    progressColor: '#7BE3F7',
    icon: (
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_42_219)">
          <path
            d="M23.5015 9.40076C17.2347 9.40076 13.3194 12.5329 11.7515 18.7997C14.1007 15.6672 16.8433 14.4925 19.9757 15.2758C21.7643 15.7215 23.0425 17.0184 24.458 18.4556C26.7617 20.7935 29.4282 23.5 35.2515 23.5C41.5179 23.5 45.4336 20.3675 47.0015 14.0993C44.6515 17.2334 41.9099 18.4086 38.7768 17.625C36.9886 17.1789 35.7119 15.8824 34.2946 14.4452C31.9923 12.1073 29.3265 9.40076 23.5015 9.40076ZM11.7515 23.5C5.48504 23.5 1.56936 26.6325 0.00146484 32.9008C2.35122 29.7667 5.09264 28.5914 8.22573 29.375C10.0143 29.8212 11.2925 31.1177 12.708 32.5549C15.0117 34.8928 17.6782 37.5993 23.5015 37.5993C29.7679 37.5993 33.6836 34.4672 35.2515 28.2004C32.9015 31.333 30.1599 32.5076 27.0268 31.7243C25.2386 31.2785 23.9619 29.9816 22.5446 28.5444C20.2423 26.2066 17.5765 23.5 11.7515 23.5Z"
            fill="#38BDF8"
          />
        </g>
        <defs>
          <clipPath id="clip0_42_219">
            <rect width="47" height="47" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const languagesData = [
  {
    name: 'English',
    percentage: 85,
    borderColor: '#56C5BB',
    progressColor: '#56C5BB',
    icon: (
      <div className="relative w-[67px] h-[67px]">
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <circle cx="33.5" cy="33.5" r="33.5" fill="white" />
        </svg>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[10.5px] left-[10.5px]"
        >
          <path
            d="M37.375 5.75H8.625C7.03718 5.75 5.75 7.03718 5.75 8.625V37.375C5.75 38.9628 7.03718 40.25 8.625 40.25H37.375C38.9628 40.25 40.25 38.9628 40.25 37.375V8.625C40.25 7.03718 38.9628 5.75 37.375 5.75Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.125 16.2916H12.4583V29.7083H19.6458M12.4583 23H19.6458M24.9167 18.2083V29.7083V23.4791C24.9167 22.3354 25.371 21.2385 26.1798 20.4297C26.9885 19.621 28.0854 19.1666 29.2292 19.1666C30.3729 19.1666 31.4698 19.621 32.2786 20.4297C33.0873 21.2385 33.5417 22.3354 33.5417 23.4791V29.7083"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Chinese',
    percentage: 95,
    borderColor: '#56C5BB',
    progressColor: '#56C5BB',
    icon: (
      <div className="relative w-[67px] h-[67px]">
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <circle cx="33.5" cy="33.5" r="33.5" fill="white" />
        </svg>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[10.5px] left-[10.5px]"
        >
          <path
            d="M37.375 5.75H8.625C7.03718 5.75 5.75 7.03718 5.75 8.625V37.375C5.75 38.9628 7.03718 40.25 8.625 40.25H37.375C38.9628 40.25 40.25 38.9628 40.25 37.375V8.625C40.25 7.03718 38.9628 5.75 37.375 5.75Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.125 19.1082C19.7417 17.9927 18.5945 16.0396 16.2993 16.3195C14.0032 16.5974 12.281 19.666 12.4727 23.5712C12.6644 27.4764 14.7689 29.7083 16.6817 29.7083C18.9769 29.7083 20.125 27.0308 20.125 27.0308M24.9167 18.2083V29.7083V23.4792C24.9167 22.3354 25.371 21.2385 26.1798 20.4298C26.9885 19.621 28.0854 19.1667 29.2292 19.1667C30.3729 19.1667 31.4698 19.621 32.2786 20.4298C33.0873 21.2385 33.5417 22.3354 33.5417 23.4792V29.7083"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
];

export default function SkillsPage() {
  return (
    <HeroContent className="pt-[70px] [@media(min-width:769px)]:pt-[125px]">
     
      <HeroHeading title="Skills"/>


      {/* Skills Section */}
      <section className="mt-[70px] [@media(min-width:769px)]:mt-[33px]">
        <div className="flex flex-col gap-[21px]">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              percentage={skill.percentage}
              borderColor={skill.borderColor}
              progressColor={skill.progressColor}
            />
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="mt-[109px]">
        <h2 className="font-['Inter'] font-semibold text-[34px] text-white mb-[33px] break-words [@media(min-width:769px)]:text-[48px]">
          Languages
        </h2>
        <div className="flex flex-col gap-[21px]">
          {languagesData.map((language, index) => (
            <SkillCard
              key={index}
              icon={language.icon}
              name={language.name}
              percentage={language.percentage}
              borderColor={language.borderColor}
              progressColor={language.progressColor}
            />
          ))}
        </div>
      </section>
    </HeroContent>
  );
}
