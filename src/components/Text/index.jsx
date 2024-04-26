import React from "react";

const sizes = {
  xs: "text-2xl font-normal md:text-[22px]",
  lg: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  s: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  md: "text-4xl font-normal md:text-[34px] sm:text-[32px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-[#7c96ab] font-['Holtwood_One_SC'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
