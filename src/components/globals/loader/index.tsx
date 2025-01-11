import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import React from "react";
type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};
const Loader = ({ children, state, className, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Loader2Icon className="animate-spin" color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
