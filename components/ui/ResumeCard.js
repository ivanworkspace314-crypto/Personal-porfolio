export default function ResumeCard({ year, title, description }) {
  return (
    <div className="border-[3px] border-[#7BE3F7] rounded-[4px] px-[51px] pt-[45px] pb-[55px] bg-transparent transition-all duration-300 ease-in-out hover:border-[#61D3ED] hover:shadow-[0_0_20px_rgba(97,211,237,0.3)] hover:bg-[#0C1B28]/10">
      <div className="text-white font-['Inter'] font-semibold text-[18px] mb-[18px]">
        {year}
      </div>
      <h3 className="text-white font-['Inter'] font-semibold text-[24px] mb-[18px]">
        {title}
      </h3>
      <p className="text-white font-['Inter'] font-normal text-[18px] leading-normal">
        {description}
      </p>
    </div>
  );
}
