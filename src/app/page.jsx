import Celok from "@/components/Celok";
import Fuzet from "@/components/Fuzet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Orarend from "@/components/Orarend";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Main />
      <Celok />
      <Orarend />
      <Fuzet />
    </main>
  );
}
