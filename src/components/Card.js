import React from "react";
import Image from "next/dist/client/image";
import Card1 from "images/card/card-1.svg";
import Card2 from "images/card/card-2.svg";
import Card3 from "images/card/card-3.svg";

export default function Card() {
  return (
    <section className="">
      <div className="md:px-4 md:py-4 grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
        <div className="text-center bg-white flex flex-col p-5 align-middle items-center pt-16 rounded transition duration-200 ease-in hover:drop-shadow-lg">
          <Image src={Card1} alt="card-1" />
          <div className="text-sm font-normal px-5 pt-16">
            <h1 className="uppercase text-red-500 font-bold leading-[29px]">Committed to GOAL </h1>
            <p className="pt-2">We don’t give in to challenge and constraint, we embrace them. We conquer our goals, not just through hard work, but also by resorting to ingenious approach.</p>
          </div>
        </div>
        <div className="text-center bg-white flex flex-col p-5 align-middle items-center pt-16 rounded transition duration-200 ease-in hover:drop-shadow-lg">
          <Image src={Card2} alt="card-1" />
          <div className="text-sm font-normal px-5 pt-16">
            <h1 className="uppercase text-red-500 font-bold leading-[29px]">Integrity</h1>
            <p className="pt-2">We believe in being good, sincere, and truthful throughout our conduct. Beyond that, our presence should bring positive impact to society.</p>
          </div>
        </div>
        <div className="text-center bg-white flex flex-col p-5 align-middle items-center pt-16 rounded transition duration-200 ease-in hover:drop-shadow-lg">
          <Image src={Card3} alt="card-1" />
          <div className="text-sm font-normal px-5 pt-16">
            <h1 className="uppercase text-red-500 font-bold leading-[29px]">Collaboration</h1>
            <p className="pt-2">The combined power of the entire team is way bigger than the sum of all individual strength, thanks to solid team work that we nurture.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
