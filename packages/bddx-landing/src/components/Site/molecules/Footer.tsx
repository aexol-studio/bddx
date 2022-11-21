import Link from "next/link";
import React from "react";
import { AexolAsSvg, FooterLogo, FooterWebs } from "@/src/assets";
import { FooterData } from "@/src/datas/FooterData";

export const Footer = () => {
  return (
    <footer className="pb-[16rem] overflow-hidden relative w-full bg-bddxBlack border-t-[1px] border-solid border-darkGray">
      <div className="opacity-[0.3] md:opacity-[1] z-[1] absolute right-[-16.8rem] md:right-0 top-[3.2rem] md:scale-y-[1] md:rotate-0 rotate-[-180deg] scale-y-[-1]">
        <div className="relative min-w-[53rem] min-h-[57rem]">
          <FooterWebs />
        </div>
      </div>

      <div className="z-[2] relative my-[5.6rem] max-w-[90%] mx-auto w-full xl:max-w-[1068px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <div className="w-fit flex gap-[0.8rem]">
            <Link
              aria-label="MDtx"
              href={"/"}
              className="min-w-[6rem] min-h-[2.4rem]"
            >
              <FooterLogo />
            </Link>
            <div className="">
              <Link
                className="items-center flex gap-[0.4rem]"
                href={"https://aexol.com/"}
              >
                <p className="select-none font-[500] text-[1.2rem] leading-[2.4rem] text-mediumGray">
                  powered by
                </p>
                <div className="mb-[0.2rem]">
                  <AexolAsSvg />
                </div>
              </Link>
            </div>
          </div>
          <p className="select-none mt-[2.4rem] font-[400] text-[1.4rem] leading-[2.4rem] text-gray3">
            Behavior driven testing CLI.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex md:flex-row flex-col">
            <div className="mt-[2.4rem] md:mt-0">
              <p className="select-none font-[700] text-[1.8rem] leading-[2.4rem] text-bddxWhite">
                Company
              </p>
              <div className="mt-[0.8rem] md:mt-[2.4rem] gap-[1.6rem] flex flex-row md:flex-col">
                {FooterData.left.map((item) => (
                  <Link
                    key={item.link}
                    className="select-none font-[400] text-[1.4rem] leading-[2.4rem] text-gray3"
                    href={item.href}
                  >
                    {item.link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-[2.4rem] md:mt-0 md:ml-[6.4rem] lg:ml-[9.6rem]">
              <p className="select-none font-[700] text-[1.8rem] leading-[2.4rem] text-bddxWhite">
                Explore Aexol Products
              </p>
              <div className="mt-[0.8rem] md:mt-[2.4rem] gap-[1.6rem] flex flex-row flex-wrap md:flex-nowrap md:flex-col">
                {FooterData.right.map((item) => (
                  <Link
                    key={item.link}
                    className="select-none font-[400] text-[1.4rem] leading-[2.4rem] text-gray3"
                    href={item.href}
                  >
                    {item.link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
