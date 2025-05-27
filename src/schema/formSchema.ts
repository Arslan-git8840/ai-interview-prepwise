import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  // profilePicture: z
  //   .custom<File>((file) => file instanceof File, {
  //     message: "Profile picture is required",
  //   }),
  // resume: z
  //   .custom<File>((file) => file instanceof File && file.type === "application/pdf", {
  //     message: "Resume must be a PDF file",
  //   }),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
