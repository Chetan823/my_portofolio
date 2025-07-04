import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "Chetan_Chaudhari_1751222734100.pdf");
    
    // Check if file exists
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Chetan_Chaudhari_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(500).json({ error: "Failed to download resume" });
        }
      });
    } else {
      res.status(404).json({ error: "Resume file not found" });
    }
  });

  // Profile photo endpoint
  app.get("/api/profile-photo", (req, res) => {
    const photoPath = path.join(process.cwd(), "attached_assets", "WhatsApp Image 2025-06-30 at 00.39.12_1751225316222.jpeg");
    
    if (fs.existsSync(photoPath)) {
      res.sendFile(photoPath);
    } else {
      res.status(404).json({ error: "Profile photo not found" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
