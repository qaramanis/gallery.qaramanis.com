export default function GalleryTitle({
  title,
  layers = 4,
}: {
  title: string;
  layers?: number;
}) {
  return (
    <div className="flex flex-col text-background bg-transparent -mb-9 select-none">
      {/* First layer without negative margin */}
      <div className="sticky top-0 text-[10rem] text-stroke-1 text-stroke-foreground tracking-wider">
        {title}
      </div>

      {/* Outlined layers */}
      {Array.from({ length: layers - 1 }).map((_, index) => (
        <div
          key={index}
          className="sticky top-0 text-[10rem] -mt-48 text-stroke-1 text-stroke-foreground tracking-wider"
        >
          {title}
        </div>
      ))}

      {/* Final filled layer */}
      <div className="sticky top-0 text-foreground text-stroke-2 text-stroke-foreground text-[10rem] -mt-48 tracking-wider hover:text-teal hover:text-stroke-teal transition-all duration-300">
        {title}
      </div>
    </div>
  );
}
