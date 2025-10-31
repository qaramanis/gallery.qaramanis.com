import { Boxes, Globe } from "lucide-react";

export default function LayoutGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="z-40">
      <div className="w-16 h-full fixed left-0 top-0 bg-background">
        <div className="w-0.5 h-screen fixed left-16 top-0 bg-foreground"></div>
        <div className="absolute top-5 -right-1/2 -left-1/2 flex items-center justify-center text-foreground select-none">
          <Globe size={24} />
        </div>
        <div className="text-xl absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap text-foreground transition-all duration-300">
          collection of personal works
        </div>
      </div>

      <div className="w-0 h-0 md:w-16 md:h-full fixed right-0 top-0 bg-background"></div>
      <div className="w-0.5 h-screen fixed right-4 md:right-16 top-0 bg-foreground"></div>

      <div className="pl-16 pr-4 md:px-16">{children}</div>
    </div>
  );
}
