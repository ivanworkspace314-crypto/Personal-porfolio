export default function SecondaryButton({ children }) {
  return (
    <button
      type="button"
      className="inline-flex min-h-[43px] px-[29px] py-[10px] justify-center items-center rounded-[8px] border-[2px] border-[#7BE3F7] bg-transparent text-[#7BE3F7] font-['Inter'] text-[20px] font-semibold cursor-pointer whitespace-normal text-center transition-colors duration-300 hover:bg-[rgba(123,227,247,0.1)] [@media(min-width:769px)]:w-auto [@media(min-width:769px)]:h-auto [@media(min-width:769px)]:px-[42px] [@media(min-width:769px)]:py-[14px] [@media(min-width:769px)]:rounded-[12px] [@media(min-width:769px)]:border-[3px] [@media(min-width:769px)]:text-[28px] [@media(min-width:769px)_and_(max-width:1024px)]:text-[22px] [@media(min-width:769px)_and_(max-width:1024px)]:px-[40px] [@media(min-width:769px)_and_(max-width:1024px)]:py-[12px]"
    >
      {children}
    </button>
  );
}
