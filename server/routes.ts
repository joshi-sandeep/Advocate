import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendContactEmail } from "./email";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Received contact form submission:", req.body);

      const validatedData = insertContactMessageSchema.parse(req.body);
      console.log("Validation passed:", validatedData);

      // Store in database
      await storage.createContactMessage(validatedData);

      // Send email
      await sendContactEmail(validatedData);

      res.json({ message: "Message sent successfully" });
    } catch (error: any) {
      console.error("Contact form error:", error);

      // If it's a validation error, return a more specific message
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation failed",
          errors: validationError.details
        });
      }

      res.status(400).json({ 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}