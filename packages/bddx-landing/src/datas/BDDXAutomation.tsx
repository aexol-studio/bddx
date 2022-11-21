import {
  Loupe,
  Document,
  Terminal,
  MagicBall,
  DeathBook,
  ChessQueen,
} from "@/src/assets";
import { IBDDXAutomation } from "@/src/components/Site";

export const BDDXAutomationContent: IBDDXAutomation = {
  smallTitle: "Features",
  bigTitle: "Automate the whole process",
  sectionDescription: "Testing your app has never been easier",
  content: [
    {
      description: "Use our CLI to write BDD tests for your team.",
      svg: <MagicBall />,
      title: "Simple CLI",
    },
    {
      description:
        "Take advantage of our test templates to check out how everything works.",
      svg: <DeathBook />,
      title: "Test templates",
    },
    {
      description:
        "Stop your test any time and resume it later from that exact point.",
      svg: <ChessQueen />,
      title: "Checkpoint system",
    },
  ],
};
