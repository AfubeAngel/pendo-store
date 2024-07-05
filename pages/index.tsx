// import { Inter } from "next/font/google";

import Bestseller from "@/components/Bestseller-section";
import Hero from "@/components/Hero-section";
import Catalog from "@/components/catalog";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Bestseller />
      <Catalog />
    </>
  );
}
