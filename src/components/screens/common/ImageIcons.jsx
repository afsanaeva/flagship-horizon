import AverageIcon from "@/components/icons/ReactTime/AverageIcon";
import EngagmentPulseIcon from "@/components/icons/ReactTime/EngagmentPulseIcon";
import TotalIcon from "@/components/icons/ReactTime/TotalIcon";
import TrendingIcon from "@/components/icons/ReactTime/TrendingIcon";
import Image from "next/image";
import React from "react";

const iconMap = {
  "image-1": EngagmentPulseIcon,
  "image-2": TrendingIcon,
  "image-3": AverageIcon,
  "image-4": TotalIcon,
  "image-5": TotalIcon,
  "image-6": TotalIcon,
};

const ImageIcons = ({ src, colorstyle, title }) => {
  const IconComponent = iconMap[src];

  if (IconComponent) {
    return <IconComponent colorstyle={colorstyle} />;
  }

  return (
    <Image
      src={src}
      alt={title || "icon"}
      width={43}
      height={43}
      loading="lazy"
    />
  );
};

export default ImageIcons;
