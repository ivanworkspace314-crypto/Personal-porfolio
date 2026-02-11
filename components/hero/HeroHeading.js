export default function HeroHeading({ title, subtitle }) {
  return (
    <>
      <h1 className="font-['Inter'] text-[34px] font-semibold text-white mb-[21px] text-center break-words [@media(min-width:769px)]:text-left [@media(min-width:769px)]:text-[48px] [@media(min-width:769px)]:mb-[33px] [@media(min-width:769px)_and_(max-width:1024px)]:text-[36px]">
        {title}
      </h1>
      <h2 className="font-['Inter'] text-[33px] font-semibold text-[#61D3ED] mb-[21px] text-center leading-[42px] break-words [@media(min-width:769px)]:text-left [@media(min-width:769px)]:text-[48px] [@media(min-width:769px)]:mb-[33px] [@media(min-width:769px)]:leading-normal [@media(min-width:769px)_and_(max-width:1024px)]:text-[36px]">
        {subtitle}
      </h2>
    </>
  );
}
