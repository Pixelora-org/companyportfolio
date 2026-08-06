import { z } from "zod"

export const feedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  comment: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (at least 10 characters)")
    .max(2000, "Feedback is too long"),
})

export type FeedbackInput = z.infer<typeof feedbackSchema>
