import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <Features />
        <Products />
        <HowItWorks />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
