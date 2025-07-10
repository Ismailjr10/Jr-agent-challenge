import dotenv from "dotenv";
import { createOllama } from "ollama-ai-provider";

dotenv.config();

export const modelName = process.env.MODEL_NAME_AT_ENDPOINT ?? "qwen2.5:1.5b";
export const baseURL = process.env.API_BASE_URL ?? "http://127.0.0.1:11434";

export const model = createOllama({ baseURL }).chat(modelName, {
  simulateStreaming: true,
});

console.log(`ModelName: ${modelName}\nbaseURL: ${baseURL}`);