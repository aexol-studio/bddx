import type { NextPage } from "next";
import {
  HeroSection,
  WhatIsBDDX,
  BonusesOfBDDX,
  BDDXAutomation,
} from "../components";
import {} from "../datas/BonusesOfBDDXContent";
import { WhatIsBDDXContent, BonusesOfBDDXContent } from "../datas";
import { Layout } from "../layouts";
import { BDDXAutomationContent } from "../datas/BDDXAutomation";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="BDDX - Automatic BDD Tester">
      <main className="bg-bddxBlack w-full h-full flex flex-col justify-center items-center">
        <HeroSection />
        <div className="mt-[6rem] max-w-[90%] mx-auto w-full xl:max-w-[1068px]">
          <section>
            <WhatIsBDDX
              content={WhatIsBDDXContent.content}
              image={WhatIsBDDXContent.image}
            />
          </section>
          <section className="mt-[8rem] mb-[12rem] md:my-[12rem] w-full flex justify-center items-center">
            <BonusesOfBDDX
              bigTitle={BonusesOfBDDXContent.bigTitle}
              smallTitle={BonusesOfBDDXContent.smallTitle}
              sectionDescription={BonusesOfBDDXContent.sectionDescription}
              content={BonusesOfBDDXContent.content}
            />
          </section>
          <section className="mt-[8rem] mb-[12rem] md:my-[12rem] w-full flex justify-center items-center">
            <BDDXAutomation
              bigTitle={BDDXAutomationContent.bigTitle}
              smallTitle={BDDXAutomationContent.smallTitle}
              sectionDescription={BDDXAutomationContent.sectionDescription}
              content={BDDXAutomationContent.content}
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
