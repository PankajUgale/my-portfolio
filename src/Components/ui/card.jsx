import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`text-gray-800 ${className}`}>{children}</div>;
};
