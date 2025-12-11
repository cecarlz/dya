import Philippines from "@/components/Delegations/Philippines";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delegations",
  description: "Learn more about DYA FILIPINAS.",
  // other metadata
};

const Delegations = () => {
  return (
    <>
      <Philippines />
    </>
  );
};

export default Delegations;
