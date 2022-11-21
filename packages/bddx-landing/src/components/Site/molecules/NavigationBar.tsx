import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BDDXLogo } from "@/src/assets";
import { GithubStars, MobileNavbar } from "@/src/components/Site/atoms/";
import { useGithubCalls } from "@/src/utils/useGithubCalls";
import { NavigationData } from "@/src/datas/NavigationData";

export const NavigationBar = () => {
  const [stars, setStars] = useState<number>();
  const [hideNavbar, setHideNavbar] = useState(false);
  const { getRepositoryBDDX } = useGithubCalls();
  useEffect(() => {
    getRepositoryBDDX().then((response) => {
      const { stargazers_count } = response;
      setStars(stargazers_count);
    });
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const thisWindow: typeof window & {
        oldScroll?: number;
        scrollY?: number;
      } = window;
      if (thisWindow.innerWidth < 768) return;
      const scrolledTop =
        thisWindow.scrollY < 128 ||
        (thisWindow.oldScroll || 0) > thisWindow.scrollY;
      scrolledTop ? setHideNavbar(false) : setHideNavbar(true);
      thisWindow.oldScroll = thisWindow.scrollY;
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav
      className={`
        z-[99] top-0 w-full py-[2.2rem] bg-bddxBlack fixed transition-all duration-300'
        ${hideNavbar ? "opacity-0" : "opacity-1"}
      `}
    >
      <div className="max-w-[90%] mx-auto w-full xl:max-w-[1068px] flex justify-between items-center relative">
        <div className="w-full h-full absolute right-[0]">
          <MobileNavbar stars={stars} />
        </div>
        <div className="z-[99] min-w-[12rem] min-h-[4.8rem] flex items-center justify-center">
          <Link aria-label="BDDX" href={"/"}>
            <BDDXLogo />
          </Link>
        </div>

        <div className="z-[99] mr-[4.8rem] md:mr-0 flex items-center justify-center">
          <Link
            className="z-[99]"
            href={"https://github.com/aexol-studio/bddx/stargazers"}
          >
            <GithubStars stars={stars} />
          </Link>

          <div className="hidden md:flex items-center">
            {NavigationData.links.map((data) => (
              <Link
                key={data.link}
                className="w-fit select-none ml-[1.6rem] lg:ml-[3.2rem] font-[400] text-[1.4rem] leading-[2.4rem] text-bddxWhite"
                href={data.href}
              >
                {data.link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
