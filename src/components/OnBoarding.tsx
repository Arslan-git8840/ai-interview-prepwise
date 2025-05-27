import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import InterviewCard from "./InterviewCard";
import { truncate } from "node:fs/promises";

export default function OnBoarding() {
  return (
    <>
      <main className={`text-white`}>
        {/* Hero */}
        <section className="flex md:flex-row flex-col gap-6 bg-gradient-to-b from-[#171532] to-[#08090D] rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Enhance Your Interview Skills with AI-Driven Practice</h2>
            <p className="text-lg">
              Prepare for real-world interviews through interactive sessions and
              receive instant, actionable feedback.
            </p>
            <Button
              asChild
              className="w-fit !bg-[#cac5fe] !text-[#020408] hover:!bg-[#cac5fe]/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10 max-sm:w-full"
            >
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </div>

          <Image
            src="/robot.png"
            alt="robo-dude"
            width={400}
            height={400}
            className="max-sm:hidden"
          />
        </section>

        {/* Past Interviews */}
        <section className="flex flex-col gap-6 mt-8 items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#CAC5FE] mb-2">
              Your Past Interviews
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <InterviewCard
                logo="/yahoo.png"
                title="Full-Stack Dev Interview"
                description="This interview will assess the candidate's engagement across the frontend and backend domains."
                badge="Technical"
                techIcons={["/pinterest.png", "/pinterest.png"]}
                href="/interview/fullstack"
                actionText="View Interview"
                isTaken={true}
              />
              <InterviewCard
                logo="/reddit.png"
                title="Business Analyst Interview"
                description="This interview will assess critical thinking, problem-solving and communication skills."
                badge="Non-Technical"
                techIcons={["/pinterest.png", "/pinterest.png"]}
                href="/interview/analyst"
                actionText="View Interview"
                isTaken={true}
              />
              <InterviewCard
                logo="/reddit.png"
                title="Business Analyst Interview"
                description="This interview will assess critical thinking, problem-solving and communication skills."
                badge="Non-Technical"
                techIcons={["/pinterest.png", "/pinterest.png"]}
                href="/interview/analyst"
                actionText="View Interview"
                isTaken={true}
              />
              <InterviewCard
                logo="/reddit.png"
                title="Business Analyst Interview"
                description="This interview will assess critical thinking, problem-solving and communication skills."
                badge="Non-Technical"
                techIcons={["/pinterest.png", "/pinterest.png"]}
                href="/interview/analyst"
                actionText="View Interview"
                isTaken={true}
              />
            </div>
          </div>
        </section>

        {/* Take Interviews */}
        <section className="flex flex-col gap-6 mt-8 items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#CAC5FE] mb-2">
              Pick Your Interview
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InterviewCard
              logo="/reddit.png"
              title="Business Analyst Interview"
              description="This interview will assess critical thinking, problem-solving and communication skills."
              badge="Non-Technical"
              techIcons={["/pinterest.png", "/pinterest.png"]}
              href="/interview/analyst"
              actionText="Take Interview"
              isTaken={false}
            />
            <InterviewCard
              logo="/reddit.png"
              title="Business Analyst Interview"
              description="This interview will assess critical thinking, problem-solving and communication skills."
              badge="Non-Technical"
              techIcons={["/pinterest.png", "/pinterest.png"]}
              href="/interview/analyst"
              actionText="Take Interview"
              isTaken={false}
            />
          </div>
        </section>
      </main>
    </>
  );
}
