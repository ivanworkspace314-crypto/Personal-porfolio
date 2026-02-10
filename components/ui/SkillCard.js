export default function SkillCard({
  icon,
  name,
  percentage,
  borderColor = '#7BE3F7',
  progressColor = '#7BE3F7'
}) {
  return (
    <div
      className="relative w-full rounded-[10px] bg-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden h-[169px] [@media(min-width:769px)]:w-[900px]"
      style={{ borderColor: borderColor, borderWidth: '3px' }}
    >
      {/* Icon */}
      <div className="absolute left-[20px] top-[32px] [@media(min-width:769px)]:left-[32px] [@media(min-width:769px)]:top-[34px]">
        {icon}
      </div>

      {/* Skill Name */}
      <div className="absolute left-[80px] top-[40px] right-[80px] [@media(min-width:769px)]:left-[112px] [@media(min-width:769px)]:right-auto [@media(min-width:769px)]:w-auto">
        <span className="font-['Inter'] font-semibold text-[20px] [@media(min-width:769px)]:text-[28px] text-white line-clamp-1 [@media(min-width:769px)]:line-clamp-none">
          {name}
        </span>
      </div>

      {/* Percentage */}
      <div className="absolute right-[20px] top-[40px] [@media(min-width:769px)]:right-[38px]">
        <span className="font-['Inter'] font-semibold text-[20px] [@media(min-width:769px)]:text-[28px] text-white">
          {percentage}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="absolute left-[20px] right-[20px] top-[110px] h-[16px] [@media(min-width:769px)]:left-[38px] [@media(min-width:769px)]:right-auto [@media(min-width:769px)]:w-[824px] [@media(min-width:769px)]:top-[118px]">
        {/* Background Track */}
        <div className="absolute left-0 top-0 w-full h-[16px] rounded-[82.437px] bg-[#385682]" />

        {/* Filled Progress */}
        <div
          className="absolute left-0 top-0 h-[16px] rounded-[82.437px]"
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
    </div>
  );
}
