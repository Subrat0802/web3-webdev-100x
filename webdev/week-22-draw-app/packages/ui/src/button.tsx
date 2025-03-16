"use client";

import { ReactNode } from "react";

interface ButtonProps {
  varient: "primary" | "secondary"
  children: ReactNode;
  className?: string;
  onClick?: () => void
  size: "lg" | "md" | "sm";
}

export const Button = ({ children, className, size, varient, onClick}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${sizeClasses[size]} ${varient === "primary" ? "bg-red-800" : ""} px-6 rounded-lg font-medium transition-colors 
      bg-blue-600 hover:bg-blue-700 text-white ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
