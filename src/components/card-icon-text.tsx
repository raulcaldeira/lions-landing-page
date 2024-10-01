import { ReactNode } from "react";

interface CardIconTextProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardIconText({ icon, title, description }: CardIconTextProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="h-[60px] w-[60px] bg-red-200 dark:bg-red-600 dark:opacity-100 dark:text-white opacity-30 flex justify-center items-center text-red-600">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-lg opacity-75 max-w-[550px]">{description}</p>
      </div>
    </div>
  );
}
