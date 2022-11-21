import React from "react";

export const FlatCard: React.FC<{
  content: {
    svg: JSX.Element;
    title: string;
    description: string;
  };
}> = ({ content }) => {
  return (
    <div className="min-w-[24rem] max-w-[24rem] border-[1px] border-[#232A2F] rounded-[6px] min-h-[30rem] flex flex-col justify-center items-center">
      <div>{content.svg}</div>
      <div className="w-[80%] mx-auto mt-[2.4rem]">
        <p className="text-center text-white font-[700] text-[2rem] leading-[2.4rem]">
          {content.title}
        </p>
        <p className="mt-[2.4rem] text-center text-gray3 font-[300] text-[1.6rem] leading-[2.4rem] ">
          {content.description}
        </p>
      </div>
    </div>
  );
};
