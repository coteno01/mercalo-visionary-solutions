
import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactFormServices = [
  "AI Solutions",
  "AI Agents",
  "ERP Implementation",
  "Business Process Automation",
  "Digital Transformation",
  "Data Analytics",
  "Other",
];
