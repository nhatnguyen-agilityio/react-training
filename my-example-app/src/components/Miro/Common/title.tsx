import { memo } from "react";

const Title = memo(({ title, className }: { title: string, className?: string }) => {
  return <h2 className={`text-[48px] leading-[56px] font-bold mt-[20px] ${className}`}>{title}</h2>;
});
export default Title;
