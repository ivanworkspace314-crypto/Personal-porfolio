export default function SkillCard({
  icon,
  name,
  percentage,
  borderColor = '#7BE3F7',
  progressColor = '#7BE3F7'
}) {
  return (
    <div
      className="w-full rounded-[10px] bg-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden [@media(min-width:769px)]:w-[1100px]"
      style={{ borderColor: borderColor, borderWidth: '3px' }}
    >
      <div className="p-[18px] [@media(min-width:769px)]:p-[24px_32px]">
        <div className="flex items-center gap-[24px] [@media(min-width:769px)]:gap-[24px]">
          {/* Icon */}
          <div className="shrink-0 w-[48px] h-[48px] flex items-center justify-center [@media(min-width:769px)]:w-[67px] [@media(min-width:769px)]:h-[67px]">
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Skill Name + Percentage */}
            <div className="flex flex-wrap items-baseline justify-between gap-[12px]">
              <span className="font-['Inter'] font-semibold text-[18px] [@media(min-width:769px)]:text-[28px] text-white break-words">
                {name}
              </span>
              <span className="font-['Inter'] font-semibold text-[18px] [@media(min-width:769px)]:text-[28px] text-white shrink-0">
                {percentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative mt-[14px] h-[12px] [@media(min-width:769px)]:mt-[22px] [@media(min-width:769px)]:h-[16px]">
          <div className="absolute left-0 top-0 w-full h-full rounded-[82.437px] bg-[#385682]" />
          <div
            className="absolute left-0 top-0 h-full rounded-[82.437px]"
            style={{
              width: `${percentage}%`,
              backgroundColor: progressColor,
            }}
          />
        </div>
      </div>
    </div>
  );
}
