"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon } from "lucide-react";

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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

const interviewSchema = z.object({
  interviewType: z.enum(["Technical", "Behavioral", "System Design"]),
  role: z.string().nonempty("Please enter a role"),
  techStack: z.string().nonempty("Please enter a tech stack"),
  duration: z.enum(["10 minutes", "20 minutes", "30 minutes", "60 minutes"]),
  profilePicture: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, "Invalid file"),
  resume: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, "Invalid file"),
});

type InterviewFormData = z.infer<typeof interviewSchema>;

export default function InterviewForm() {
  const form = useForm<InterviewFormData>({
    resolver: zodResolver(interviewSchema),
    defaultValues: {
      interviewType: "Technical",
      role: "",
      techStack: "",
      duration: "10 minutes",
      profilePicture: undefined,
      resume: undefined,
    },
  });

  const onSubmit = (data: InterviewFormData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-black bg-grid-white/[0.05] px-4">
      <div className="w-full max-w-md bg-[#121212] border-2 border-white/20 rounded-lg p-8 shadow-xl text-white">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-x-3">
            <Image
              src="/ai-avatar.png"
              alt="PrepWise logo"
              width={40}
              height={40}
              className="invert"
            />
            <h1 className="text-2xl font-semibold text-[#CBCBDD]">PrepWise</h1>
          </div>
          <p className="mt-4 text-xl font-semibold text-[#E7E9EB]">
            Starting Your Interview
          </p>
          <p className="text-[#99989d]">
            Customize your mock interview to suit your needs.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Interview Type */}
            <FormField
              control={form.control}
              name="interviewType"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">
                    What type of interview?
                  </Label>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D] w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#27282D] text-[#99989d]">
                        {["Technical", "Behavioral", "System Design"].map(
                          (opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">What role?</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Frontend Engineer"
                      className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tech Stack */}
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">Which tech stack?</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. React, Node.js"
                      className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Duration */}
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">How long?</Label>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="rounded-3xl px-4 py-5 outline-none border-none bg-[#27282D] w-full">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "10 minutes",
                          "20 minutes",
                          "30 minutes",
                          "60 minutes",
                        ].map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Profile Picture */}
            <FormField
              control={form.control}
              name="profilePicture"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">Profile picture</Label>
                  <FormControl>
                    <div className="flex items-center gap-3 rounded-3xl bg-[#27282D] px-4 py-1">
                      <ImageIcon className="text-[#99989d]" size={20} />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="flex-1 bg-transparent text-white border-none outline-none file:bg-transparent file:border-0 file:text-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* resume */}

            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[#99989d]">Resume</Label>
                  <FormControl>
                    <div className="flex items-center gap-3 rounded-3xl bg-[#27282D] px-4 py-1">
                      <ImageIcon className="text-[#99989d]" size={20} />
                      <Input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="flex-1 bg-transparent text-white border-none outline-none file:bg-transparent file:border-0 file:text-white"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full rounded-3xl bg-violet-500 hover:bg-violet-600 py-4 font-semibold text-black"
            >
              Start Interview
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
