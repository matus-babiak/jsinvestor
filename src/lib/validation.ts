import { z } from "zod";

/** Kontakt odoslaný do Ecomail API (`/api/ecomail`). */
export const leadSchema = z.object({
  email: z.string().trim().email().max(254),
  firstName: z.string().trim().max(100).optional(),
  lastName: z.string().trim().max(100).optional(),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^\+?[0-9\s-()]{6,30}$/.test(val), {
      message: "Neplatný formát telefónu",
    }),
});

export type LeadInput = z.infer<typeof leadSchema>;

/** Plný lead payload z dotazníka pre webhook (`/api/webhook`). */
export const leadWebhookPayloadSchema = z.object({
  firstName: z.string().trim().max(100),
  lastName: z.string().trim().max(100),
  name: z.string().trim().max(200),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(6).max(30),
  totalPoints: z.number().int().min(0).max(100),
  resultCategory: z.number().int().min(1).max(3),
  submittedAt: z.string().max(40),
  q1_letter: z.string().max(4).optional(),
  q1_text: z.string().max(500).optional(),
  q1_points: z.number().int(),
  q2_letter: z.string().max(4).optional(),
  q2_text: z.string().max(500).optional(),
  q2_points: z.number().int(),
  q3_letter: z.string().max(4).optional(),
  q3_text: z.string().max(500).optional(),
  q3_points: z.number().int(),
  q4_letter: z.string().max(4).optional(),
  q4_text: z.string().max(500).optional(),
  q4_points: z.number().int(),
});

export type LeadWebhookPayload = z.infer<typeof leadWebhookPayloadSchema>;
