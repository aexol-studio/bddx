import React from "react";
import { WhatIsBDDXHead } from "@/src/assets";
import { FlatCard } from "../atoms";

export interface IBDDXAutomation {
  smallTitle: string;
  bigTitle: string;
  sectionDescription: string;
  content: {
    description: string;
    svg: JSX.Element;
    title: string;
  }[];
}

export const BDDXAutomation: React.FC<IBDDXAutomation> = ({
  bigTitle,
  smallTitle,
  sectionDescription,
  content,
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="select-none min-h-[18rem] relative w-full flex justify-center items-center">
        <div className="text-center z-[1] flex flex-col items-center justify-center">
          <p className="text-mdtxOrange0 font-[600] text-[1.2rem] leading-[2.4rem] uppercase">
            {smallTitle}
          </p>
          <h2 className="mt-[0.8rem] text-bddxWhite font-[700] text-[3.2rem] leading-[4rem]">
            {bigTitle}
          </h2>
          <p className="text-gray3 font-[400] text-[1.6rem] leading-[2.4rem]">
            {sectionDescription}
          </p>
        </div>
      </div>
      <div className="mt-[6.4rem] md:mt-[4.2rem] flex-col ssm:flex-row ssm:flex-wrap justify-center md:flex-nowrap md:flex-row flex gap-[6.4rem] md:gap-[1.6rem] lg:gap-[12rem] items-start">
        {content.map((data, index) => (
          <FlatCard content={data} key={index} />
        ))}
      </div>
    </div>
  );
};
