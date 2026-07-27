import { z } from "zod";

export const opportunitySchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  organization: z
    .string()
    .min(2, "Organization is required"),

  location: z
    .string()
    .min(2, "Location is required"),

  category: z
    .string()
    .min(2, "Category is required"),

  type: z
    .string()
    .min(2, "Opportunity type is required"),

  salary: z
    .string()
    .min(2, "Salary is required"),

  experience: z
    .string()
    .min(2, "Experience is required"),

  email: z
    .string()
    .email("Please enter a valid email"),

  deadline: z
    .string()
    .min(1, "Deadline is required"),

  description: z
    .string()
    .min(
      30,
      "Description should be at least 30 characters"
    ),

  requirements: z
    .string()
    .min(
      5,
      "Requirements are required"
    ),

  applyUrl: z
    .string()
    .url("Please enter a valid URL"),
});

export type OpportunitySchema =
  z.infer<typeof opportunitySchema>;

export type OpportunityFormValues =
  OpportunitySchema;