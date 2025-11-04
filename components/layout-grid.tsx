"use client";
import { Folders, Info, Globe, ScanEye } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function LayoutGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === "/") {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, redirect to home
      router.push("/");
    }
  };

  return (
    <div className="z-40">
      <div className="w-16 h-full fixed left-0 top-0 bg-background">
        <div className="w-0.5 h-screen fixed left-16 top-0 bg-foreground flex"></div>
        <div
          onClick={handleHomeClick}
          className="left-5 absolute top-5 flex text-foreground hover:text-teal select-none transition-all duration-300 cursor-pointer"
        >
          <Globe size={24} />
        </div>
        <div className="flex flex-col absolute left-5 top-25 gap-6 md:hidden">
          <div
            onClick={() => router.push("/about")}
            className="text-foreground hover:text-teal select-none transition-all duration-300 cursor-pointer"
          >
            <Info size={24} />
          </div>
          <div
            onClick={() => router.push("/more")}
            className="text-foreground hover:text-teal select-none transition-all duration-300 cursor-pointer"
          >
            <Folders size={24} />
          </div>
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
