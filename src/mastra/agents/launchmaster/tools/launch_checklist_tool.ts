import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const launchChecklistTool = createTool({
  id: "launch-checklist-tool",
  description: "Generates a personalized to-do list for a Web3 token launch based on the project stage.",
  inputSchema: z.object({
    projectStage: z.string().describe("The current stage of the Web3 project (e.g., planning, development, pre-launch)"),
  }),
  outputSchema: z.object({
    checklist: z.array(z.string()).describe("A list of actionable tasks for the token launch"),
  }),
  execute: async ({ context }) => {
    const { projectStage } = context;
    let checklist: string[] = [];

    switch (projectStage.toLowerCase()) {
      case "planning":
        checklist = [
          "Define tokenomics (supply, distribution, utility).",
          "Draft a whitepaper outlining project vision and roadmap.",
          "Research legal requirements for token issuance.",
          "Identify target audience and marketing strategy.",
        ];
        break;
      case "development":
        checklist = [
          "Develop and test smart contracts for token issuance.",
          "Set up a testnet for trials.",
          "Integrate with wallets/exchanges.",
          "Plan security audits for smart contracts.",
        ];
        break;
      case "pre-launch":
        checklist = [
          "Finalize smart contract deployment on mainnet.",
          "Secure liquidity pools for trading.",
          "Launch marketing campaigns and community engagement.",
          "Prepare for IDO or other launch mechanism.",
        ];
        break;
      default:
        throw new Error("Invalid stage. Use 'planning', 'development', or 'pre-launch'.");
    }

    return { checklist };
  },
});
