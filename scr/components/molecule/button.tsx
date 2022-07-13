import React from "react";


type ButtonProps = {
  variant: string;
  children: React.ReactNode;
  className?: string;
  endIcon?: React.ReactNode | any;
};

const Button = ({ variant, className, children, endIcon }: ButtonProps) => {
  const fixed =
    "bg-orange-600 pt-3 pb-3 pl-8 pr-8 text-white  top-80 align-middle -right-16  fixed -rotate-90";
  const primary =
    "text-center rounded text-white px-[25px] py-[10px]  h-[45px] w-[127px] text-[17px]  bg-black hover:bg-App-orange  ease-in-out duration-500";
  const outlined =
    "text-center rounded text-black hover:text-white  border-2 border-black py-[11px]  h-[50px] w-[142px] text-[16px]  bg-white hover:bg-black ease-in-out duration-500";
  //  contained === orange color up btn
  const contained =
    "text-white w-[170px] py-[14px] h-[52px] bg-App-orange  text-center text-[16px] " ;
  // with radius btn
  const secondary =
    "bg-App-orange hover:bg-slate-900 font-bold text-white rounded-full ease-in-out duration-700 w-[190px] py-[10px] text-center";
  // big btn
  const alpha =
    "w-[271px] bg-App-orange text-[25px]  text-center px-[18px] py-[20px] h-[81px] text-white rounded filled";
  return (
    <div>
      <div
        className={`${variant === "fixed" ? fixed : null}   ${
          variant === "primary" ? primary : null
        } ${variant === "outlined" ? outlined : null}  ${
          variant === "contained" ? contained : null
        }   ${variant === "secondary" ? secondary : null} ${
          variant === "alpha" ? alpha : null
        }  ${className} cursor-pointer flex items-center justify-center`}
      >
        {children}
        {endIcon && <span className="ml-2"> {endIcon}</span>}
      </div>
    </div>
  );
};

export default Button;
