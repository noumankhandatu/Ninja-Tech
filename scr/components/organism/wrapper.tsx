import React from "react";
type WrapperProps = {
  children: React.ReactNode;
  full?: boolean;
  contained?: boolean;
  className?: any;
};
const Wrapper = ({ children, contained, full, className }: WrapperProps) => {
  return (
    <>
      {full ? <div className={`${className}`}>{children}</div> : null}
      {contained ? (
        <div className={`${className} pl-20 pr-20`}>{children}</div>
      ) : null}
    </>
  );
};

export default Wrapper;
