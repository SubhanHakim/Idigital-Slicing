import React from "react";
import Blog1 from "images/blog/blog-1.png";
import Blog2 from "images/blog/blog-2.png";
import Button from "components/Button";
import Image from "next/dist/client/image";

export default function Blog() {
  return (
    <section>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-[#2e2e2e] tracking-[0.15em]">BLOG</h1>
          <Button name="View All" />
        </div>
        <div className="py-[30px] grid grid-flow-col overflow-x-scroll md:overflow-x-hidden md:grid-cols-3 gap-4">
          <div className="bg-white rounded-md w-[443px] md:w-auto transition duration-150 ease-in hover:drop-shadow-lg">
            <div>
              <Image src={Blog1} alt="blog" />
            </div>
            <h1 className="text-lg font-bold text-[#2e2e2e] uppercase px-5 py-2 leading-[29px]">5 Old-School Web Design Trends Nobody Misses</h1>
            <div className="px-5 border-t-[1px] border-[#F2F2F2] py-3 flex justify-between">
              <div className="flex">
                <div className="w-[23px] h-[23px] bg-[#FF594B] rounded-full"></div>
                <h2 className="mx-2 text-sm text-[#FF594B] font-normal">
                  <span className="text-[#BDBDBD]">by</span> Ihsan Maulana
                </h2>
              </div>
              <span className="uppercase text-[#BDBDBD] text-sm text-right">JULLY 14,2022</span>
            </div>
          </div>
          <div className="bg-white rounded-md w-[443px] md:w-auto transition duration-150 ease-in hover:drop-shadow-lg">
            <div>
              <Image src={Blog2} alt="blog" />
            </div>
            <h1 className="text-lg font-bold text-[#2e2e2e] uppercase px-5 py-2 leading-[29px]">5 Old-School Web Design Trends Nobody Misses</h1>
            <div className="px-5 border-t-[1px] border-[#F2F2F2] py-3 flex justify-between">
              <div className="flex">
                <div className="w-[23px] h-[23px] bg-[#FF594B] rounded-full"></div>
                <h2 className="mx-2 text-sm text-[#FF594B] font-normal">
                  <span className="text-[#BDBDBD]">by</span> Ihsan Maulana
                </h2>
              </div>
              <span className="uppercase text-[#BDBDBD] text-sm text-right">JULLY 14,2022</span>
            </div>
          </div>
          <div className="bg-white rounded-md w-[443px] md:w-auto transition duration-150 ease-in hover:drop-shadow-lg">
            <div>
              <Image src={Blog2} alt="blog" />
            </div>
            <h1 className="text-lg font-bold text-[#2e2e2e] uppercase px-5 py-2 leading-[29px]">5 Old-School Web Design Trends Nobody Misses</h1>
            <div className="px-5 border-t-[1px] border-[#F2F2F2] py-3 flex justify-between">
              <div className="flex">
                <div className="w-[23px] h-[23px] bg-[#FF594B] rounded-full"></div>
                <h2 className="mx-2 text-sm text-[#FF594B] font-normal">
                  <span className="text-[#BDBDBD]">by</span> Ihsan Maulana
                </h2>
              </div>
              <span className="uppercase text-[#BDBDBD] text-sm text-right">JULLY 14,2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
