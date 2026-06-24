import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/tts", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }

      const interaction = await ai.interactions.create({
        model: "gemini-3.1-flash-tts-preview",
        input: `Say the following: ${text}`,
        response_modalities: ["audio"],
        generation_config: {
        }
      });

      let audioData = null;
      for (const step of interaction.steps) {
        if (step.type === "model_output") {
          const audioContent = step.content?.find(c => c.type === "audio");
          if (audioContent && audioContent.data) {
            audioData = audioContent.data;
            break;
          }
        }
      }

      if (audioData) {
        const audioBuffer = Buffer.from(audioData, "base64");
        res.setHeader("Content-Type", "audio/wav");
        res.send(audioBuffer);
      } else {
        res.status(500).json({ error: "Failed to generate audio" });
      }
    } catch (error: any) {
      console.error("TTS Error:", error);
      res.status(500).json({ error: error.message || "An error occurred during TTS generation." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
