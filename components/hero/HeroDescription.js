export default function HeroDescription({ children }) {
  return (
    <p className="font-['Inter'] text-[26px] font-normal leading-[1.559] text-white text-center mb-[43px] max-w-[336px] mx-auto [@media(min-width:769px)]:text-left [@media(min-width:769px)]:mb-[33px] [@media(min-width:769px)]:max-w-[579px] [@media(min-width:769px)]:mx-0 [@media(min-width:769px)_and_(max-width:1024px)]:text-[20px]">
      {children}
    </p>
  );
}
