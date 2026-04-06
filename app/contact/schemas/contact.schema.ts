import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  mobile: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  contactMethod: z.string().min(1, "Required"),
  hearAboutUs: z.string().min(1, "Required"),
  investableAssets: z.string().min(1, "Required"),
  message: z.string().optional(),
});
