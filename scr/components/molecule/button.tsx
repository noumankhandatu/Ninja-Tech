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
    "text-white w-[170px] py-[14px] h-[52px] bg-App-orange  text-center text-[16px]";
  // with radius btn
  const secondary =
    "bg-App-orange hover:bg-slate-900 font-bold text-white rounded-full ease-in-out duration-700 w-[190px] py-[10px] text-center";
  // big btn
  const alpha =
    "w-[209px] bg-App-orange text-[19px]  text-center px-[18px] py-[20px] h-[65px] text-white rounded filled";
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

// import './Buttons.scss'
// import { ButtonProps } from './Button.props'
// import { DefaultTooltip } from '../../Molecules/Tooltips/Tooltip'
// import AppFonts from '../Fonts/AppFonts'

// export const Button = forwardRef(
//   (
//     {
//       name = '',
//       className = '',
//       variant = 'text',
//       color = 'textPrimary',
//       fullWidth = false,
//       showStartIcon = false,
//       startIcon = <ButtonPlusIcon />,
//       showEndIcon = false,
//       endIcon = <ButtonArrowDownIcon />,
//       disabled = false,
//       showTooltipOnDisabled = false,
//       tooltipMessage = '',
//       isActive = false,
//       alignItems = 'center',
//       isIconInSuccessState = false,
//       noPadding = false,
//       noHover = false,
//       ...props
//     }: ButtonProps,
//     ref?: ForwardedRef<HTMLButtonElement>,
//   ) => {
//     const commonStylesSmall =
//       'btn-custom btn-small group flex items-center rounded disabled:cursor-not-allowed relative'
//     const commonStylesNormal =
//       'btn-custom btn-normal group flex items-center rounded disabled:cursor-not-allowed relative'
//     const btnContained = 'btn-contained px-[10px] py-1.5 gap-[6px]'
//     const btnText = 'btn-text px-[6px] py-1 gap-[4px]'
//     const btnTextSmall = 'btn-text px-[6px] py-[3.5px] gap-[4px]'
//     const btnPrimary =
//       'btn-contained-primary bg-stone-900 hover:bg-stone-800 active:bg-stone-700 disabled:bg-stone-500'
//     const btnSecondary = `btn-contained-secondary ${
//       isActive ? 'bg-stone-500' : 'bg-stone-200'
//     } hover:bg-stone-400 active:bg-stone-500 disabled:bg-stone-200`
//     const btnDanger =
//       'btn-contained-danger bg-white hover:bg-rose-50 active:bg-rose-100 border-0 border-stone-300 hover:border-rose-200 active:border-rose-200'
//     const btnTextPrimary =
//       'btn-text-primary bg-transparent hover:bg-stone-100 active:bg-stone-200 disabled:bg-transparent'
//     const btnTextSuccess =
//       'btn-text-success bg-transparent hover:bg-stone-100 active:bg-stone-200 disabled:bg-transparent'
//     const btnTextDanger = 'btn-text-danger bg-transparent hover:bg-rose-50 active:bg-rose-100'

//     return (
//       <button
//         ref={ref}
//         {...props}
//         disabled={disabled}
//         className={`${variant === 'textSmall' ? commonStylesSmall : commonStylesNormal} ${className}

//         ${variant === 'contained' ? btnContained : ''}
//         ${variant === 'text' ? btnText : ''}
//         ${variant === 'textSmall' ? btnTextSmall : ''}
//         ${color === 'primary' ? btnPrimary : ''}
//         ${color === 'secondary' ? btnSecondary : ''}
//         ${color === 'danger' ? btnDanger : ''}
//         ${color === 'textPrimary' ? btnTextPrimary : ''}
//         ${color === 'textSuccess' ? btnTextSuccess : ''}
//         ${color === 'textDanger' ? btnTextDanger : ''}
//         ${fullWidth ? 'w-full' : ''}
//         ${isActive ? 'is-active' : ''}
//         ${alignItems === 'spaceBetween' ? 'gap-0 justify-between' : ''}
//         ${alignItems === 'start' ? 'justify-start' : ''}
//         ${alignItems === 'center' ? 'justify-center' : ''}
//         ${isIconInSuccessState ? 'icon-in-success-state' : ''}
//         ${noPadding ? 'no-padding' : ''}
//         ${noHover ? 'no-hover' : ''}
//         `}
//       >
//         {showStartIcon && startIcon ? startIcon : null}
//         <AppFonts
//           fontStyle={
//             variant === 'textSmall'
//               ? 'Body S/Normal'
//               : variant === 'text'
//               ? 'Body L/Normal'
//               : 'Body L/Normal'
//           }
//           className="btn-label"
//         >
//           {name}
//         </AppFonts>
//         {showEndIcon && endIcon ? endIcon : null}

//         {/* tooltip */}
//         {disabled && showTooltipOnDisabled && (
//           <div className="hidden group-hover:block absolute -bottom-10 w-max z-50 tooltip">
//             <DefaultTooltip text={tooltipMessage || 'Message for disabled button'} />
//           </div>
//         )}
//       </button>
//     )
//   },
// )
