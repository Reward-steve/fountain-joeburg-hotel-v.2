"use client";

import React from "react";

type BranchFeatureProps = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
};

export const BranchFeature = ({
  icon,
  title,
  subTitle,
}: BranchFeatureProps) => {
  return (
    <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-4 sm:gap-6 p-4 sm:p-0 bg-white/[0.02] md:bg-transparent rounded-2xl border border-white/5 md:border-none">
      {/* Dynamic Native Icon Wrapper */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 md:mx-auto md:mb-4">
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any>, {
              className: "text-gold w-5 h-5 sm:w-6 sm:h-6",
            })
          : icon}
      </div>

      {/* Typography Node Context Container */}
      <div className="space-y-1 sm:space-y-2 flex-1">
        <h3 className="font-serif text-lg sm:text-2xl sm:italic text-white">
          {title}
        </h3>
        <p className="text-white/50 md:text-white/40 font-light text-xs sm:text-sm leading-relaxed">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
