import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import LearnMore from "@/components/LearnMore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DYA FILIPINAS",
  description:
    "DYA is a non-stock, nonprofit, humanitarian organization that helps during emergencies including but not limited to Emergency Medical Services, Disaster Relief and Rescue Operations.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <LearnMore />
    </>
  );
}
