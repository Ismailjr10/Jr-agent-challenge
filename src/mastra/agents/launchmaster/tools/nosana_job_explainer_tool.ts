import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const nosanaJobExplainerTool = createTool({
  id: "nosana-job-explainer-tool",
  description: "Explains a Nosana job definition from YAML content in plain English.",
  inputSchema: z.object({
    yamlContent: z.string().describe("Content of the nos_job_def.yaml file"),
  }),
  outputSchema: z.object({
    explanation: z.string().describe("Human-readable explanation of the Nosana job"),
  }),
  execute: async ({ context }) => {
    const { yamlContent } = context;
    let explanation = "This Nosana job definition:\n";
    if (yamlContent.includes("image:")) {
      explanation += "- Specifies a Docker image to run the job.\n";
    }
    if (yamlContent.includes("cmd:")) {
      explanation += "- Defines a command to execute within the container.\n";
    }
    if (yamlContent.includes("gpu:")) {
      explanation += "- Requests GPU resources for computation.\n";
    }
    if (yamlContent.includes("env:")) {
      explanation += "- Sets environment variables for the job.\n";
    }
    explanation += "The job runs on Nosana's decentralized GPU network to perform tasks like AI processing or data analysis.";
    return { explanation };
  },
});
