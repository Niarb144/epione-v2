import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  company: z
    .string()
    .min(2, "Please enter your company or organisation name.")
    .max(150, "Company name is too long."),
  organizationType: z
    .string()
    .min(1, "Please select your organisation type."),
  email: z
    .string()
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  country: z
    .string()
    .min(1, "Please select your country."),
  inquiryType: z
    .string()
    .min(1, "Please select an inquiry type."),
  subject: z
    .string()
    .min(3, "Please provide a subject.")
    .max(200, "Subject is too long."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(2000, "Message is too long (max 2000 characters)."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;