"use client";

import React from "react";
import clsx from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
  textSize?: "xs" | "sm" | "md" | "lg";
};

// Variants strictly handle color theory, background layers, borders, and interaction states
const variants = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-light active:scale-[0.98] shadow-xl shadow-gold/10 transition-all font-display uppercase tracking-widest font-bold",
  secondary:
    "border border-white/20 text-white hover:bg-white hover:text-black active:bg-white/5 active:scale-[0.98] transition-all font-display uppercase tracking-widest font-bold",
};

// Sizes strictly handle dynamic space padding definitions to guarantee safe mobile touch envelopes
const buttonSizes = {
  sm: "px-4 py-2.5 min-h-[40px]",
  md: "px-6 py-3.5 min-h-[44px]",
  lg: "px-10 py-4.5 min-h-[48px]",
  icon: "p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
};

const textSizes = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  textSize = "sm",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center text-center rounded-xl cursor-pointer outline-none select-none duration-200 ease-out disabled:opacity-40 disabled:pointer-events-none",
        variants[variant],
        buttonSizes[size],
        textSizes[textSize],
        className,
      )}
      style={{ touchAction: "manipulation" }}
      {...props}
    >
      {children}
    </button>
  );
};
