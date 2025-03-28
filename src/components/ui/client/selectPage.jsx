import React from "react";
import { Checkbox } from "../";
import { cn } from "@/lib/utils";

const SelectPage = ({
  checked = false,
  onCheckedChange,
  label = "All pages",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-[#FFFFFF] flex items-center justify-between w-[370px] h-[42px] pl-[22px] pr-[15px] py-[8px]",
        className
      )}
      {...props}
    >
      <span
        className=" font-normal text-sm leading-[130%] tracking-[0px]"
      >
        {label}
      </span>
      
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
};

export { SelectPage };
