import Image from "next/image";
import type { StaticImageData } from "next/image";
import clsx from "clsx";

type partnerCardProps = {
  icon: string | StaticImageData;
  light?: boolean;
  iconWidth?: number;
  iconHeight?: number;
};

const PartnerCard = ({icon, light, iconWidth = 128, iconHeight = 128 }: partnerCardProps) => {
  return (
    <div className="relative max-w-md w-full min-w-[192px]  h-48 overflow-hidden rounded-xl border border-gray-200 p-[1px] backdrop-blur-3xl">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FAFBFF0A_0%,#FAFBFF1F_50%,#FAFBFF0A_100%)]" />
      <div className={clsx("inline-flex h-full w-full relative items-center justify-center rounded-xl px-3 py-1 text-sm font-medium backdrop-blur-3xl", light ? "bg-foreground-heading" : "bg-background")}>
        <Image src={icon} alt="Icon" width={iconWidth} height={iconHeight} className="z-10"/>
        <Image src={icon} alt="Icon" width={192} height={192} className="w-[50%] h-[50%] blur-3xl absolute top-0 opacity-50" quality={10}/>
        <span className="w-16 h-16 blur-3xl rounded-full absolute bg-foreground-heading"></span>
      </div>
    </div>
  );
};

export default PartnerCard;
