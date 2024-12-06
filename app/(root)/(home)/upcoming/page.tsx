import React from "react";
import CallList from "@/components/ui/CallList"; // Ensure the path matches the file location



const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming</h1>
      <CallList type='upcoming' />
    </section>
  );
};

export default Upcoming;