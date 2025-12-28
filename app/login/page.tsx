"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { validateCredentials, setAuthenticated } from "@/lib/mock-auth"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { loginSchema, loginValues } from "@/lib/validator"
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "./action"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Eye, EyeOff } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: loginValues) {
    try {
      console.log(values);
      const response = await login(values);
      console.log(response);

      if (!response?.success) {
        toast({
          variant: "destructive",
          title: "Failed",
          description: response?.message,
        });
      } else {
        router.push("/admin/users");
      }
    } catch (error: unknown) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Failed",
        description: "Server or Network Problem!",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto">
            <Image
              src="/images/logo-fb-dp-removebg-preview.png"
              alt="Softzyne"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>Sign in to access the admin dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        disabled={form?.formState?.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="pr-[46px]"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          disabled={form?.formState?.isSubmitting}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-1/2 -translate-y-1/2 bg-muted-foreground/5 rounded-l-none"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={
                  form?.formState?.isSubmitting ||
                  Object.keys(form?.formState?.dirtyFields).length < 2
                }
              >
                {form?.formState?.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
            <Toaster />
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
