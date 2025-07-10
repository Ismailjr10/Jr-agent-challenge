import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const lpEstimatorTool = createTool({
  id: "lp-estimator-tool",
  description: "Estimates liquidity pool token allocation based on token name, total supply, and LP percentage.",
  inputSchema: z.object({
    tokenName: z.string().describe("Name of the token"),
    totalSupply: z.number().positive().describe("Total token supply"),
    lpPercentage: z.number().min(0).max(100).describe("Percentage of tokens for liquidity pool"),
  }),
  outputSchema: z.object({
    lpAllocation: z.number().describe("Number of tokens for liquidity pool"),
    tips: z.array(z.string()).describe("Tips for liquidity pool setup"),
  }),
  execute: async ({ context }) => {
    const { tokenName, totalSupply, lpPercentage } = context;
    const lpAllocation = (totalSupply * lpPercentage) / 100;
    const tips = [
      `Allocate ${lpPercentage}% of ${tokenName} (${lpAllocation} tokens) to the liquidity pool.`,
      "Ensure sufficient liquidity to minimize price volatility.",
      "Consider pairing with a stablecoin like USDC for better stability.",
      "Verify pool setup with a DEX like Raydium or Orca before launch.",
    ];
    return { lpAllocation, tips };
  },
});