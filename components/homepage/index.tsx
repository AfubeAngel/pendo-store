import React from "react";
import Hero from "@/components/Hero-section";
import Catalog from "@/components/catalog";
import Bestseller from "@/components/Bestseller-section";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Bestseller />
      <Catalog />
    </>
  );
}
