import Head from "next/head";
import Header from "../components/header";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import Porto from "components/Porto";
import Gallery from "components/Gallery";
import Card from "components/Card";
import Button from "components/Button";
import Blog from "components/Blog";
import Card2 from "components/Card2";

// import image
import Slider from "images/img/slider-1.png";
import downArrow from "images/arrow.png";
import map from "images/map.png";
import email from "images/mail.png";
import instagram from "images/ig.png";
import linkedin from "images/in.png";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Idgital</title>
        <meta name="description" content="Idgital App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Hero section */}
      <section className="md:px-4 md:py-4">
        <div className="md:grid-cols-2 md:grid flex flex-col">
          <div className="bg-white -z-20">
            <Image src={Slider} alt="testing" />
            <div className="flex relative bottom-10 justify-center z-20 md:bottom-12">
              <div className="bg-red-600 w-3 h-3 rounded-full mx-2"></div>
              <div className="bg-gray-400 w-3 h-3 rounded-full mx-2"></div>
              <div className="bg-gray-400 w-3 h-3 rounded-full mx-2"></div>
              <div className="bg-gray-400 w-3 h-3 rounded-full mx-2"></div>
              <div className="bg-gray-400 w-3 h-3 rounded-full mx-2"></div>
              <div className="bg-gray-400 w-3 h-3 rounded-full mx-2"></div>
            </div>
          </div>
          <div className="bg-white">
            <div className="p-4 flex flex-col justify-center align-middle">
              <h1 className="text-2xl font-bold tracking-[0.15rem] text-[#2e2e2e]">About Us</h1>
              <p className="text-sm font-normal leading-[26px] text-[#2e2e2e]">
                We are a vibrant community of innovative businesses, which bonded by our mission to foster ideas, challenge conventional thinking, and take part in the country’s vision to be a regional digital powerhouse. With unique blend
                of strong corporate wisdom and top talents from the emerging tech startups, we are proud to combine the agility and drive from startup culture with sustainable and structured mindset from the corporate world. We believe that
                each of our team member is a co-founder of the business, that plays a pivotal role in the exciting journey to the top. <br /> <br /> <br />
                We live and breathe our values below:{" "}
              </p>
              <div className="mt-5">
                <Link href="/">
                  <a>
                    <Image src={downArrow} alt="downArrow" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Card />

      <Porto />

      <Gallery />

      <Blog />

      <section>
        <div className="md:p-4 py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-[400px_minmax(0,_1fr)] gap-2">
            <div className="bg-neutral-600 p-5 h-[380px] flex flex-col justify-center">
              <h3 className="text-white text-2xl font-normal">Are you the one?</h3>
              <div className="w-[90px] h-[5px] bg-red-500 mt-[10px]"></div>
              <p className="text-white text-sm leading-[20.48px] tracking-wider mt-5 font-semibold">
                Innovation <br /> Think beyond the box and cherish new ideas Proactively seeking new frontier Strive for continuous improvement, in pursuit of excellence Integrity Sincerity and perserverance Uphold legal and ethical norms
                Embrace social responsibility for sustainable development.
              </p>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-[#2e2e2e] tracking-[0.15em]">CAREER</h1>
                <Button name="View All" />
              </div>
              <Card2 />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="md:p-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[50%_minmax(0,_1fr)] gap-2">
            <div className="">
              <h1 className="text-2xl text-center md:text-left font-bold text-[#2e2e2e] tracking-[0.15em]">CONTACT INFORMATION</h1>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Image src={map} alt="Map" />
                <div className="bg-[#2e2e2e] p-10 flex flex-col justify-center">
                  <h2 className="text-sm font-semibold text-white">Ariobimo Sentral, 3rd Floor Jl. H.R. Rasuna Said Blok X-2 Kav. 5 Jakarta Selatan 12950</h2>
                  <div className="mt-5">
                    <h3 className="uppercase text-sm tracking-wider font-semibold text-white">FOLLOW US</h3>
                    <div className="flex gap-2 ">
                      <Link href="/">
                        <a>
                          <Image src={email} alt="Email" />
                        </a>
                      </Link>
                      <span className="text-white text-sm tracking-wider font-normal">idigital@idgital.id</span>
                    </div>
                    <div className="flex gap-2 ">
                      <Link href="/">
                        <a>
                          <Image src={instagram} alt="Email" />
                        </a>
                      </Link>
                      <span className="text-white text-sm tracking-wider font-normal">idigital</span>
                    </div>
                    <div className="flex gap-2 ">
                      <Link href="/">
                        <a>
                          <Image src={linkedin} alt="Email" />
                        </a>
                      </Link>
                      <span className="text-white text-sm tracking-wider font-normal">idigital</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#2e2e2e] tracking-[0.15em] uppercase">Contact us</h1>

              <form action="/" className="flex flex-col justify-start">
                <input type="text" id="first" name="first" placeholder="Full Name" className="w-[450px] bg-[#fafafa] h-[60px] p-3" />
                <input type="email" placeholder="Email" className="w-[450px] bg-[#fafafa] h-[60px] p-3 mt-[10px]" />
                <input type="text" id="first" name="first" placeholder="message" className="w-[450px] bg-[#fafafa] h-36 p-3 mt-[10px]" />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
