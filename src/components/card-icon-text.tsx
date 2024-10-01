import { ReactNode } from "react";
import { Badge } from "./ui/badge";

interface CardIconTextProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardIconText({ icon, title, description }: CardIconTextProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden sm:flex h-[60px] w-[60px] bg-red-200 dark:bg-red-600 dark:opacity-100 dark:text-white opacity-30 justify-center items-center text-red-600">
        {icon}
      </div>
      <div className="flex-1 mt-4 sm:mt-0">
        <h3 className="font-bold text-base md:text-lg hidden sm:block">{title}</h3>
        <div className="flex justify-center mb-4 sm:hidden">
          <Badge className="text-base">{title}</Badge>
        </div>
        <p className="text-base opacity-75 max-w-[550px]">{description}</p>
      </div>
    </div>
  );
}
