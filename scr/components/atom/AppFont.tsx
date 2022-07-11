import React from "react";
type AppFontProps = {
  children: string;
  className: string;
  startIcon?: any;
  endIcon?: any;
};
const AppFont = ({ children, className, endIcon, startIcon }: AppFontProps) => {
  return (
    <p
      className={`${className} text-[15px] font-normal text-{#1C1B1B} flex `}
    >
      {startIcon && <div className={`${className} mt-1`}>{startIcon}</div>}
      {children}
      {endIcon && endIcon}
    </p>
  );
};

export default AppFont;
