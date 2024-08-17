import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ShirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const Shirt = ({ imgSrc, className, ...props }: ShirtProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={"/t-shirt.jpg"}
        className="pointer-events-none z-50 select-none"
        alt="shirt image"
      />

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="relative w-24 h-24  md:w-32 md:h-32 lg:w-40 lg:h-40">
          <img
            className="object-cover w-[125px] h-[125px] md:w-[100px] md:h-[100px]  lg:ml-8 lg:mt-8"
            src={imgSrc}
            alt="overlaying chest image"
          />
        </div>
      </div>
    </div>
  );
};

export default Shirt;
