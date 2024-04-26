import React from "react";

const sizes = {
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  xs: "text-xs font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-[#7c96ab] font-['Kameron'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
