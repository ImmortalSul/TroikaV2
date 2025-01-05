import { z } from "zod";

const regex = {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/,
};

export const SignInSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long",
    }).max(12, {
        message: "Password must be at most 12 characters long",
    }).regex(regex.password, {
        message: "Password must contain at least 1 letter, 1 number and 1 special character",
    }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
