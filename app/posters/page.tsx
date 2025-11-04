"use client";

import { useRouter } from "next/navigation";

export default function PostersPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-[50vh] md:min-h-screen flex flex-col items-start md:items-center justify-center gap-8 p-2">
      <h1 className="text-4xl">posters page under development</h1>
      <div
        onClick={() => router.push("/")}
        className="text-lg p-0 cursor-pointer relative hover:border-teal text-foreground hover:text-teal transition-all duration-300"
      >
        return to home
      </div>
    </div>
  );
}
