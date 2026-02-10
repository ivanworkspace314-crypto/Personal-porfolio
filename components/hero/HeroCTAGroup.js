import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function HeroCTAGroup({ primaryLabel, secondaryLabel }) {
  return (
    <div className="flex flex-row gap-[24px] mt-[59px] items-center justify-center [@media(min-width:769px)]:gap-[37px] [@media(min-width:769px)]:mt-[164px] [@media(min-width:769px)]:items-start [@media(min-width:769px)]:justify-start [@media(min-width:769px)_and_(max-width:1024px)]:mt-[60px]">
      <PrimaryButton>{primaryLabel}</PrimaryButton>
      <SecondaryButton>{secondaryLabel}</SecondaryButton>
    </div>
  );
}
