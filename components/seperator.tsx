export default function Separator() {
  return (
    <div className="h-16 py-4 w-full relative bg-background flex justify-center items-center z-40 overflow-hidden">
      {/*<div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent 0, transparent 30px, currentColor 30px, currentColor 60px)",
        }}
      />*/}
      <div className="w-[98%] h-0.5 absolute top-1/6 bg-foreground/75 z-10"></div>
      <div className="w-[96%] h-0.5 absolute top-2/6 bg-foreground/65  z-10"></div>
      <div className="w-[94%] h-0.5 absolute top-3/6 bg-foreground/55  z-10"></div>

      <div className="w-full h-0.5 absolute top-0 bg-foreground z-10"></div>
      <div className="w-full h-0.5 absolute bottom-0 bg-foreground z-10"></div>
    </div>
  );
}
