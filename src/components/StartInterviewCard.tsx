"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RepeatIcon, X } from "lucide-react";

export default function StartInterviewCard() {
  return (
    <div className="bg-black bg-grid-white/[0.05] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-2xl bg-[#121212] text-white p-8 shadow-2xl space-y-8">
        {/* Title */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#6C4EFF]/20 p-2 rounded-full">
              <Image src="/hostinger.png" alt="chat" width={24} height={24} />
            </div>
            <h2 className="text-xl font-semibold">
              Frontend Developer Interview
            </h2>
            <div className="flex gap-2 ml-2">
              <Image src="/star.svg" alt="settings" width={18} height={18} />
              <Image src="/adobe.png" alt="refresh" width={18} height={18} />
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-[#2A273F] text-xs text-[#A29EFF]">
            Technical Interview
          </span>
        </div>

        {/* Interviewer & User Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* AI Interviewer Card */}
          <div className="flex-1 bg-gradient-to-b from-[#6C4EFF] to-[#3D2B91] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10">
            <div className="w-24 h-24 bg-[#2C1F6C] rounded-full flex items-center justify-center mb-4">
              <Image src="/adobe.png" alt="AI" width={40} height={40} />
            </div>
            <p className="font-medium text-white text-lg">AI Interviewer</p>
          </div>

          {/* User Card */}
          <div className="flex-1 bg-[#1B1B1F] rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10">
            <Image
              src="/logo.svg"
              alt="You"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
            <p className="font-medium text-white text-lg">Adrian (You)</p>
          </div>
        </div>

        {/* Chat Line */}
        <div className="bg-[#1B1B1F] px-6 py-3 rounded-xl text-center text-[#E7E9EB] text-base font-medium">
          What job{" "}
          <span className="bg-white text-black px-2 rounded-md mx-1">
            experience level
          </span>{" "}
          are you targeting?
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 pt-4 flex-wrap">
          <Button variant="ghost" className="bg-[#2C2C39] text-white px-6 py-2">
            <RepeatIcon size={16} className="mr-2" />
            Repeat
          </Button>
          <Button variant="destructive" className="px-6 py-2">
            <X size={16} className="mr-2" />
            Leave interview
          </Button>
        </div>
      </div>
    </div>
  );
}
