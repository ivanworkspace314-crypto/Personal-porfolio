export default function Paragraph({ children, className = "" }) {
  return (
    <p className={`font-['Inter'] text-[20px] font-normal leading-[1.559] text-white mb-[43px] max-w-[336px] mx-auto break-words  [@media(min-width:769px)]:text-[25px] [@media(min-width:769px)]:text-left [@media(min-width:769px)]:mb-[33px] [@media(min-width:769px)]:max-w-[579px] [@media(min-width:769px)]:mx-0 ${className}`}>
    {children}
    </p>
  );
}
