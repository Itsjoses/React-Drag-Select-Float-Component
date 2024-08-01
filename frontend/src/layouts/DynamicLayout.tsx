import React from "react";
import { DynamicLayoutProps } from "../DataTypes/GlobalInterface";

export default function DynamicLayout({ border, children }: DynamicLayoutProps) {
  return (
    <div
      className={`max-w-screen ${
        border ? `border-b border-slate-300` : ``
      } flex`}
    >
      <div className="w-full px-4 sm:px-0 flex justify-center">
        <div className='w-full sm:w-[640px] md:w-[760px] lg:w-[1000px] xl:w-[1200px]  transition-all duration-500'>
          {children}
        </div>
      </div>
    </div>
  );
}
