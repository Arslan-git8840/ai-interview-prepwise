import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const InterviewCard = ({
  logo,
  title,
  description,
  badge,
  techIcons = [],
  actionText = "",
  href = "/interview",
  isTaken = false,
}: {
  logo: string;
  title: string;
  description: string;
  badge: "Technical" | "Non-Technical";
  techIcons?: string[];
  actionText?: string;
  href?: string;
  isTaken?: boolean;
}) => {
  const badgeColor = badge === "Technical" ? "bg-[#2D2DFF]" : "bg-[#6B6B9E]";

  return (
    <div className="relative bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33] rounded-2xl p-5 w-full max-w-sm min-h-[260px] flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between">
        <div className="bg-[#2A293E] p-2 rounded-full">
          <Image src={logo} alt="logo" width={32} height={32} />
        </div>
        <span
          className={cn(
            "absolute top-0 right-0 text-sm px-3 py-1 rounded-full text-white font-medium",
            badgeColor
          )}
        >
          {badge}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[#b0b0d0] mt-2">{description}</p>
      </div>

      <div>
        {isTaken && (
          <div className="flex gap-2 text-sm text-muted-foreground mt-1">
            <div className="flex items-center gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
              />
              <span>28th May</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/star.svg" alt="score" width={18} height={18} />
              <span>94/100</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-2">
          {techIcons.map((icon, idx) => (
            <Image
              key={idx}
              src={icon}
              alt="tech-icon"
              width={20}
              height={20}
            />
          ))}
        </div>

        <Button
          asChild
          className="bg-[#6E5CF5] hover:bg-[#8671ff] rounded-full text-white font-medium px-4 py-2 text-sm"
        >
          <Link href={href}>{actionText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default InterviewCard;
