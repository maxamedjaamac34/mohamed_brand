"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

// Props shape for the DisplayCard component
interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onClick?: () => void;
}

// DisplayCard component/ render a single card
function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  descriptionClassName = "absolute left-6 top-1/2 -translate-y-1/2",
  onClick,
}: DisplayCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex h-44 w-[26rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className 
      )}
    >
      {/* styling for the date content in card */}
      <p className="absolute left-60 top-4 text-muted-foreground">{date}</p>
      {/* styling for the title and icon content in card */}
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1.5">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className={cn("whitespace-nowrap text-lg", descriptionClassName)}>{description}</p>
    </button>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}
// display default cards if no cards are provided
export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Featured",
      description: "Discover amazing content",
      date: "Just now",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Popular",
      description: "Trending this week",
      date: "2 days ago",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "New",
      description: "Latest updates and features",
      date: "Today",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 -ml-12">
      {displayCards.map((cardProps, index) => {
        const { key, ...restProps } = cardProps as DisplayCardProps & { key?: string };
        return <DisplayCard key={key || index} {...restProps} />;
      })}
    </div>
  );
}
