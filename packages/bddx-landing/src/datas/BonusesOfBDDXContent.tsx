import { Loupe, Document, Terminal } from "@/src/assets";
import { IBonusesOfBDDX } from "@/src/components/Site";

export const BonusesOfBDDXContent: IBonusesOfBDDX = {
  smallTitle: "BDD",
  bigTitle: "Streamline the testing process",
  sectionDescription: "Use BDD testing to easily detect every error",
  content: [
    {
      typeOfBubbles: "one",
      description:
        "Reasearching and deciding on acceptance criteria based on product type, features, target audience, market and other factors.",
      svg: <Loupe />,
      title: "Discovery",
    },
    {
      typeOfBubbles: "two",
      description:
        "Deciding to what extent a product can be accepted based on end-user needs and approval.",
      svg: <Document />,
      title: "Formulation",
    },
    {
      typeOfBubbles: "three",
      description:
        "Optimizing the time and resources it takes to run tests needed to validate and ensure that the new patterns or behaviors are compatible with the system.",
      svg: <Terminal />,
      title: "Automation",
    },
  ],
};
