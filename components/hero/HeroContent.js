export default function HeroContent({ children, className = '' }) {
  return (
    <div
      className={`relative pt-[70px] px-[33px] z-[1] [@media(min-width:769px)]:pt-[291px] [@media(min-width:769px)]:pl-[128px] [@media(min-width:769px)]:px-0 [@media(min-width:769px)_and_(max-width:1024px)]:pt-[150px] [@media(min-width:769px)_and_(max-width:1024px)]:pl-[60px] ${className}`}
    >
      {children}
    </div>
  );
}
