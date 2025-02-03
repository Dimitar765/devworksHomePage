import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
        <Typewriter text="<Web_Solutions_For_Your_Project/>" delay={50} />
      </h1>
      <p className="text-xl mb-8 text-green-300">
        <Typewriter text="Digital presence that define your work" delay={30} />
      </p>
      <Link href="/initialize-project">
        <Button
          variant="outline"
          size="lg"
          className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
        >
          INITIALIZE PROJECT
        </Button>
      </Link>
    </section>
  );
}
