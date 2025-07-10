import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { launchChecklistTool } from "./tools/launch_checklist_tool";
import { lpEstimatorTool } from "./tools/lp_estimator_tool";
import { nosanaJobExplainerTool } from "./tools/nosana_job_explainer_tool";

export const launchMasterAgent = new Agent({
  name: "LaunchMaster",
  instructions: `
    You are LaunchMaster, a Web3 builder assistant for token founders.
    Your functions include:
    - Generating personalized token launch checklists based on project stage (use launch_checklist_tool).
    - Estimating liquidity pool allocations for tokens (use lp_estimator_tool).
    - Explaining Nosana job definitions from YAML input (use nosana_job_explainer_tool).
    Be concise, professional, and focus on actionable Web3 advice. If user input is unclear, ask for clarification (e.g., "Please specify your project stage or provide valid YAML for the Nosana job.").
  `,
  model: openai("gpt-4o-mini"),
  tools: { launchChecklistTool, lpEstimatorTool, nosanaJobExplainerTool },
});