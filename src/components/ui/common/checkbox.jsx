import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  variant = "primary",
  ...props
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative w-[23px] h-[23px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          "cursor-pointer peer w-[23px] h-[23px] shrink-0 rounded-[6px] border border-[#878787] shadow-xs transition-all duration-200 ease-in-out outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          isHovered && !props.disabled ? "shadow-[0_0_5px_2px_rgba(80,135,248,0.4)]" : "",
          "data-[state=checked]:border-[#FFFFFF]",
          variant === "primary" ? "data-[state=checked]:bg-[#2469F6]" : "data-[state=checked]:bg-[#5087F8]",
          className
        )}
        {...props}>
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-all duration-200 ease-in-out">
          <CheckIcon className="size-4 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      
      {/* Hover indicator that shows the tick */}
      {isHovered && !props.checked && !props.disabled && (
        <div className="absolute inset-0  flex items-center justify-center pointer-events-none">
          <CheckIcon className="size-4 text-[#878787]" />
        </div>
      )}
    </div>
  );
}

export { Checkbox }
