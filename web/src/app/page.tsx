import { Hero } from "@/components/Hero/Hero";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

export default function HomePage() {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
      </main>
    </>
  );
}
