import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendContactEmail } from "./email";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      // Send email
      await sendContactEmail(data);

      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit form" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}