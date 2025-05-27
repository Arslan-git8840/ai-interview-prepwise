"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema, signupSchema } from "@/schema/formSchema";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { Login, Signup } from "@/firebase/actions";
import { toast } from "sonner";
import { getFriendlyFirebaseError } from "@/lib/utils";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  type: "login" | "signup";
};

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const schema = type === "signup" ? signupSchema : loginSchema;
  type FormData = z.infer<typeof schema>;

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues:
      type === "signup"
        ? {
            fullName: "",
            email: "",
            password: "",
          }
        : {
            email: "",
            password: "",
          },
  });

  const onSubmit = async (values: FormData) => {
    console.log(values);
    if (type === "signup") {
      try {
        // Create user with Firebase Authentication
        const userCred = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const savedUser = await Signup({
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          uid: userCred.user.uid,
        });
        console.log("savedUser", savedUser);
        if (savedUser.success) {
          form.reset();
          console.log("User registered:", savedUser);
          toast.success(
            savedUser.message ||
              "Account created successfully!, please sign in."
          );
          router.push("/auth/sign-in");
        }; 
      } catch (error: any) {
        console.error("Signup error:", error);

        // Extract Firebase error code/message
        const errorCode = error.code || "auth/unknown";
        const errorMessage = getFriendlyFirebaseError(errorCode);

        toast.error(errorMessage);
      }
    } else {
      // Handle login
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const idToken = await userCredentials.user.getIdToken();
        const response = await Login({
          email: values.email,
          idToken,
        });
        console.log("loginres",response);
        if (response.success) {
          toast.success(response.message);
          router.push("/");
        }
      } catch (error: any) {
        console.error("Login error:", error);
        const errorCode = error.code || "auth/unknown";
        const errorMessage = getFriendlyFirebaseError(errorCode);
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-grid-white/[0.05] px-4">
      <div className="w-full max-w-md rounded-lg border-2 border-white/20 bg-[#121212] p-8 shadow-xl text-white">
        <div className="text-center mb-6">
          <div className="flex gap-x-3 items-center justify-center">
            <Image
              src="/ai-avatar.png"
              alt="PrepWise logo"
              width={40}
              height={40}
              className="invert"
            />
            <h1 className="text-2xl font-semibold text-[#CBCBDD]">PrepWise</h1>
          </div>

          <p className="text-xl text-[#E7E9EB] font-semibold mt-4">
            {type === "signup"
              ? "Join PrepWise and get started"
              : "Resume your journey with PrepWise"}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {type === "signup" && (
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-[#99989d]">Full name</Label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Adrian Hajdin"
                        className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">Email</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="your@email.com"
                      type="email"
                      className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D]"
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
                  <Label className="text-[#99989d]">Password</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                      className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* {type === "signup" && (
              <>
                <FormField
                  control={form.control}
                  name="profilePicture"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <Label className="text-[#99989d]">Profile picture</Label>
                      <FormControl>
                        <div className="flex items-center gap-3 rounded-3xl px-4 py-1 bg-[#27282D]">
                          <ImageIcon className="text-[#99989d]" size={20} />
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                            className="flex-1 text-white bg-transparent border-none outline-none file:text-white file:bg-transparent file:border-0"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <Label className="text-[#99989d]">Resume</Label>
                      <FormControl>
                        <div className="flex items-center gap-3 rounded-3xl px-4 py-1 bg-[#27282D]">
                          <FileTextIcon className="text-[#99989d]" size={20} />
                          <Input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                            className="flex-1 text-white bg-transparent border-none outline-none file:text-white file:bg-transparent file:border-0"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )} */}

            <Button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-3xl"
            >
              {type === "signup" ? "Create an account" : "Login"}
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center text-sm text-[#99989d]">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="text-violet-400 hover:underline font-medium"
              >
                Sign up for PrepWise
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a
                href="/auth/sign-in"
                className="text-violet-400 hover:underline font-medium"
              >
                Login to PrepWise
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
