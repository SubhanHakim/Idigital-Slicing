import { useState } from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import Logo from "images/logo.svg";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-full bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"></div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl text-[#D71921] font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          HOME
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-[#D71921]"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          ABOUT US
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-[#D71921]"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          BUSINESS PORTFOLIO
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-[#D71921]"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          GALLERY
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-[#D71921]"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          BLOG
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-[#D71921]"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          CAREER
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-[#D71921]"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link href="/">
          <a>
            <Image src={Logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>

        <div className="hidden md:flex">
          <Link href="">
            <a className="text-xl font-normal mx-4 text-[#D71921] uppercase">Home</a>
          </Link>
          <Link href="">
            <a className="text-xl font-normal mx-4 hover:text-[#D71921] uppercase">about us</a>
          </Link>
          <Link href="">
            <a className="text-xl font-normal mx-4 hover:text-[#D71921] uppercase">Business Portfolio</a>
          </Link>
          <Link href="">
            <a className="text-xl font-normal mx-4 hover:text-[#D71921] uppercase">Gallery</a>
          </Link>
          <Link href="">
            <a className="text-xl font-normal mx-4 hover:text-[#D71921] uppercase">BLOG</a>
          </Link>
          <Link href="">
            <a className="text-xl font-normal mx-4 hover:text-[#D71921] uppercase">Career</a>
          </Link>
          <Link href="">
            <a className="text-xl font-normal mx-4 hover:text-[#D71921] uppercase">CONTACT US</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
