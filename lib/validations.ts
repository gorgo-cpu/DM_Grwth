import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Please add your name." }),
  email: z.string().email({ message: "Enter a valid email." }),
  company: z.string().min(2, { message: "Tell us your company or team name." }),
  message: z.string().min(10, { message: "Share a few project details." }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
