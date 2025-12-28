"use server";

import { signIn } from "@/auth";
import { loginSchema, loginValues } from "@/lib/validator";
import { AuthError } from "next-auth";

export const login = async (formData: loginValues) => {
    try {

        console.log('calling login function');
        const { email, password } = loginSchema.parse(formData);
        await signIn("credentials", { email, password, redirect: false });
        return {
            success: true,
            message: "Login successfull",
        };
    } catch (error: unknown) {
        console.error("//////", error);
        if (error instanceof AuthError) {
            return {
                success: false,
                message: error?.cause?.err?.message,
            };
        }
        return {
            success: false,
            message: "Something went wrong!",
            test: "from login"
        };
    }
};
