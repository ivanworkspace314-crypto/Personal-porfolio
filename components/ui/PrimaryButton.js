export default function PrimaryButton({ children }) {
  return (
    <button
      type="button"
      className="inline-flex min-h-[43px] px-[37px] py-[10px] justify-center items-center rounded-[8px] border border-black bg-[#61D3ED] text-black font-['Inter'] text-[20px] font-semibold cursor-pointer whitespace-normal text-center transition-opacity duration-300 hover:opacity-90 [@media(min-width:769px)]:w-auto [@media(min-width:769px)]:h-auto [@media(min-width:769px)]:px-[53px] [@media(min-width:769px)]:py-[14px] [@media(min-width:769px)]:rounded-[10px] [@media(min-width:769px)]:text-[28px] [@media(min-width:769px)_and_(max-width:1024px)]:text-[22px] [@media(min-width:769px)_and_(max-width:1024px)]:px-[40px] [@media(min-width:769px)_and_(max-width:1024px)]:py-[12px]"
    >
      {children}
    </button>
  );
}
