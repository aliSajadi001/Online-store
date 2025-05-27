"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "./Theme";

function Navbar() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // اسکرول به پایین: مخفی
      } else {
        setShowNavbar(true); // اسکرول به بالا: نمایش
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar
          ? "translate-y-0 bg-white backdrop-blur-none"
          : "-translate-y-full"
      } px-3 md:px-10 lg:px-16 xl:px-20 2xl:px-32 h-16 flex items-center justify-between bg-white/90 backdrop-blur-md`}
    >
      {/* logo------------------------------------------------------------------------------ */}
      <div>
        <Image
          src="/img/icons8-hotel-50.png"
          alt="logo"
          className="w-10 h-10"
          height={10}
          width={10}
        />
      </div>
      {/* search bar------------------------------------------------------------------------ */}

      <div>
        <div className="flex items-center">
          <div
            className="rounded-full bg-orange-400 p-2 text-white cursor-pointer"
            onClick={() => setShowInput((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search hear"
            className={`ml-2 rounded-full px-4 py-1 border border-orange-500 placeholder:text-orange-400  outline-none transition-all duration-500 bg-white text-black ${
              showInput
                ? "md:w-[200px] lg:w-[340px] opacity-100"
                : "w-0 opacity-0"
            } overflow-hidden`}
          />
        </div>
      </div>
      {/* Links----------------------------------------------------------------------------- */}
      <div className="flex items-center gap-5 ">
        <Link
          href="/"
          className="text-orange-500 font-bold text-md hover:scale-110 duration-300 transition-all"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-orange-500 font-bold text-md hover:scale-110 duration-300 transition-all"
        >
          Booking
        </Link>
        <Link
          href="/"
          className="text-orange-500 font-bold text-md hover:scale-110 duration-300 transition-all"
        >
          Srvices
        </Link>
        <Link
          href="/"
          className="text-orange-500 font-bold text-md hover:scale-110 duration-300 transition-all"
        >
          Reviews
        </Link>
        <Link
          href="/"
          className="text-orange-500 font-bold text-md hover:scale-110 duration-300 transition-all"
        >
          All
        </Link>
      </div>
      <ModeToggle/>
    </div>
  );
}

export default Navbar;
