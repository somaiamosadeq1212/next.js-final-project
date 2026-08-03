import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters."),
});

export type ContactSchema = z.infer<typeof contactSchema>;