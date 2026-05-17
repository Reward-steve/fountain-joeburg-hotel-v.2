"use client";

import React from "react";

type ContactInfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

export function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  return (
    <div className="flex gap-4 sm:gap-6 items-start p-3 sm:p-0 bg-white/[0.02] sm:bg-transparent rounded-xl border border-white/5 sm:border-none">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any>, {
              className: "text-gold w-4 h-4 sm:w-5 sm:h-5",
            })
          : icon}
      </div>
      <div className="space-y-0.5 sm:space-y-1">
        <h4 className="font-display uppercase tracking-[0.15em] text-[10px] sm:text-xs text-gold/90 font-medium">
          {label}
        </h4>
        <div className="text-white/70 font-light text-xs sm:text-sm leading-relaxed">
          {value}
        </div>
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  required?: boolean;
  onChange: (val: string) => void;
  isTextArea?: boolean;
};

export function InputField({
  label,
  placeholder,
  type = "text",
  value,
  required = true,
  onChange,
  isTextArea = false,
}: InputFieldProps) {
  const baseClasses =
    "w-full bg-white/[0.02] border-b border-white/10 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors font-light rounded-none appearance-none";

  return (
    <div className="space-y-1.5 sm:space-y-2">
      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-display block">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          required={required}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} resize-none`}
          placeholder={placeholder}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
