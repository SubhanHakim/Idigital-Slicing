import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import gallery1 from "images/gallery/gallery-1.png";
import gallery2 from "images/gallery/gallery-2.png";
import gallery3 from "images/gallery/gallery-3.png";
import gallery4 from "images/gallery/gallery-4.png";
import gallery5 from "images/gallery/gallery-5.png";
import gallery6 from "images/gallery/gallery-6.png";
import gallery7 from "images/gallery/gallery-7.png";
import Instagram from "images/gallery/icon-instagram.png";

export default function Gallery() {
  return (
    <section>
      <div className="md:p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2e2e2e] tracking-[0.15em]">GALLERY</h1>
        </div>
        <div className="grid grid-cols-3 gap-[1px] md:gap-3 md:grid-cols-4 py-10">
          <div clas>
            <Image src={gallery1} alt="BEACH" />
          </div>
          <div>
            <Image src={gallery2} alt="BEACH" />
          </div>
          <div>
            <Image src={gallery3} alt="BEACH" />
          </div>
          <div>
            <Image src={gallery4} alt="BEACH" />
          </div>
          <div>
            <Image src={gallery5} alt="BEACH" />
          </div>
          <div>
            <Image src={gallery6} alt="BEACH" />
          </div>
          <div>
            <Image src={gallery7} alt="BEACH" />
          </div>
          <div className="bg-[#2e2e2e] rounded-md md:h-full flex text-center justify-center">
            <div className="p-10 flex flex-col justify-center align-middle">
              <div>
                <Image src={Instagram} alt="Instagram" />
              </div>
              <Link href="/">
                <a className="text-sm font-normal leading-[26px] text-white">View More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
