import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import HeroGlobe from "./_components/HeroGlobe";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     {/**Header */}
      <Header/>
     {/**Hero */}
     <HeroGlobe/>
    </div>
  );
}
