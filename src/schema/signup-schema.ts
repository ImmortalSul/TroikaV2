import { z } from "zod";

const regex = {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/,
};

export const SignUpSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long",
    }).max(12, {
        message: "Password must be at most 12 characters long",
    }).regex(regex.password, {
        message: "Password must contain at least one letter and one number",
    }).optional(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
