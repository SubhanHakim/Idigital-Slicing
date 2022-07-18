import React from "react";
import Image from "next/dist/client/image";
import Porto1 from "images/portoimg/porto-1.png";
import Porto2 from "images/portoimg/porto-2.png";
import Porto3 from "images/portoimg/porto-3.png";
import Porto4 from "images/portoimg/porto-4.png";
import Porto5 from "images/portoimg/porto-5.png";
import Porto6 from "images/portoimg/porto-6.png";

export default function Porto() {
  return (
    <section>
      <div className="md:p-4 py-[100px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2e2e2e] tracking-[0.15em]">BUSINESS PORTFOLIO</h1>
        </div>
        <div className="py-10 justify-between grid grid-cols-2 md:grid-cols-3 items-center align-middle text-center gap-1 md:gap-4">
          <div className="bg-white p-10 md:py-[62px] rounded-md transition duration-200 ease-in hover:drop-shadow-lg">
            <Image src={Porto1} alt="IdMarco" />
          </div>
          <div className="bg-white p-10 md:py-[62px] rounded-md transition duration-200 ease-in hover:drop-shadow-lg">
            <Image src={Porto2} alt="TokTok.Id" />
          </div>
          <div className="bg-white p-10 md:py-[62px] rounded-md transition duration-200 ease-in hover:drop-shadow-lg">
            <Image src={Porto3} alt="Indoliquid" />
          </div>
          <div className="bg-white p-14 md:py-[62px] rounded-md transition duration-200 ease-in hover:drop-shadow-lg">
            <Image src={Porto4} alt="ics Compute" />
          </div>
          <div className="bg-white p-14 md:py-[62px] rounded-md transition duration-200 ease-in hover:drop-shadow-lg">
            <Image src={Porto5} alt="Uptown" />
          </div>
          <div className="bg-white md:py-[18px] rounded-md transition duration-200 ease-in hover:drop-shadow-lg">
            <Image src={Porto6} alt="Cafe" />
          </div>
        </div>
      </div>
    </section>
  );
}
