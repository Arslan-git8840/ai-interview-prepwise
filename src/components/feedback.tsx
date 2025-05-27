"use client";
import Link from "next/link";
import { StarIcon, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function InterviewFeedbackPage() {
    // Dummy data
    const title = "Frontend Developer Interview";
    const overallScore = 12;
    const timestamp = "Feb 28, 2025 – 3:45 PM";
    const summary =
        "This interview does not reflect serious interest or engagement from the candidate. Their responses are dismissive, vague, or outright negative, making it difficult to assess their qualifications, motivation, or suitability for the role.";
    const breakdown = [
        {
            heading: "Enthusiasm & Interest",
            score: 0,
            max: 20,
            points: [
                'The candidate openly states, "I really don’t," when asked why they want to work for the company.',
                'Their response to future career plans ("Probably in some other company") indicates a lack of commitment.',
            ],
        },
        {
            heading: "Communication Skills",
            score: 5,
            max: 20,
            points: [
                "Responses are brief and unhelpful.",
                'Some answers lack clarity (e.g., "What am I going to do in this role?").',
                "A slight redeeming factor is that they remain polite.",
            ],
        },
        {
            heading: "Self-Awareness & Reflection",
            score: 2,
            max: 20,
            points: [
                "The candidate refuses to discuss their background and weaknesses.",
                'They claim to have "no weaknesses at all," which suggests a lack of self-awareness.',
            ],
        },
    ];
    const finalVerdict = "Not Recommended";

    return (
        <div className="min-h-screen bg-black bg-grid-white/[0.05] px-4 py-6 flex justify-center">
            <div className="w-full max-w-3xl bg-[#121212] rounded-2xl p-8 text-white shadow-xl">
                {/* Title */}
                <h1 className="text-2xl font-semibold mb-4">
                    Feedback on the Interview — {title}
                </h1>

                {/* Score & Date */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-[#99989d] mb-6">
                    <div className="flex items-center gap-1.5">
                        <Image src={"/star.svg"} alt="star" width={16} height={16}></Image>
                        <span>Overall Impression: {overallScore}/100</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={"/calendar.svg"} alt="calendar" width={16} height={16} />
                        <span>{timestamp}</span>
                    </div>
                </div>

                <hr className="border-[#2a2a2a] mb-6" />

                {/* Summary */}
                <p className="text-[#E7E9EB] mb-8 leading-relaxed">{summary}</p>

                {/* Breakdown */}
                <div className="space-y-6 mb-8">
                    <h2 className="text-xl font-semibold">Breakdown of Evaluation:</h2>
                    <ol className="list-decimal list-inside space-y-4 text-[#E7E9EB]">
                        {breakdown.map((item, i) => (
                            <li key={i}>

                                {item.heading} ({item.score}/{item.max})

                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-[#99989d]">
                                    {item.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Final Verdict */}
                <div className="mb-8">
                    <p className="inline-block font-medium">
                        Final Verdict:&nbsp;
                        <span className="text-red-400">{finalVerdict}</span>
                    </p>
                    <p className="mt-2 text-sm text-[#99989d] leading-relaxed">
                        This candidate does not appear to be seriously considering the role
                        and fails to provide meaningful responses. If this is reflective
                        of their true attitude, they would not be a good fit for most positions.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" className="flex-1 max-w-xs">
                        <Link href="/">Back to dashboard</Link>
                    </Button>
                    <Button className="flex-1 max-w-xs bg-violet-500 hover:bg-violet-600 text-black">
                        <Link href="/interview/retry">Retake interview</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
