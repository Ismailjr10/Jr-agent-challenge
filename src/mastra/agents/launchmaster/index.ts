import { createAgent } from "@mastra/core";
import { model } from "../../config";
import { launchChecklistTool } from "./tools/launch_checklist_tool";
import { lpEstimatorTool } from "./tools/lp_estimator_tool";
import { nosanaJobExplainerTool } from "./tools/nosana_job_explainer_tool";

export const launchMasterAgent = createAgent({
  name: "launchMaster",
  description: "An AI agent to assist Web3 token founders with launch checklists, liquidity pool estimation, and Nosana job explanations.",
  model: model,
  tools: [launchChecklistTool, lpEstimatorTool, nosanaJobExplainerTool],
  systemPrompt: `You are LaunchMaster, an AI agent designed to assist Web3 token founders. Provide concise, accurate, and practical advice for launching tokens, estimating liquidity pools, and understanding Nosana job definitions. Use the provided tools to deliver structured responses.`,
});