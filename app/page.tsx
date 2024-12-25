import Grid from "@/components/Grid";

export default function Home() {
  return (
    <div className="relative min-h-screen dark:bg-black bg-white  dark:bg-dot-white/[0.5] bg-dot-black/[0.5] bg-fixed flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
      <div className="w-full">
        <Grid />
      </div>
    </div>
  );
}
