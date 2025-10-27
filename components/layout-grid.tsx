import { Boxes, Globe } from "lucide-react";

export default function LayoutGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="w-0.5 h-screen fixed left-16 top-0 bg-foreground z-40"></div>
      <div className="w-0.5 h-screen fixed right-16 top-0 bg-foreground z-40"></div>
      <div className="fixed left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 -rotate-90 origin-center whitespace-nowrap text-foreground">
        collection of personal works
      </div>

      {/*<div className="w-[65px] h-0.5 fixed top-16 left-0 bg-foreground z-50"></div>*/}
      {/*<div className="w-[65px] h-0.5 fixed top-16 right-0 bg-foreground z-50"></div>*/}
      <div className="size-16 fixed top-0 left-0 flex items-center justify-center text-foreground select-none z-40">
        <Globe size={24} />
      </div>
      <div className="px-16">{children}</div>
    </div>
  );
}
