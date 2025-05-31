'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ModeToggle } from './Theme';
import SmalMenu from './SmalMenu';

function Navbar() {
     const [showInput, setShowInput] = useState<boolean>(false);
     const [showNavbar, setShowNavbar] = useState<boolean>(true);
     const [lastScrollY, setLastScrollY] = useState<number>(0);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setShowNavbar(false); // Scroll down: Hide----------------------------------------
               } else {
                    setShowNavbar(true); // Scroll up: Show----------------------------------------------
               }
               setLastScrollY(window.scrollY);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, [lastScrollY]);

     return (
          <div
               className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500  ${
                    showNavbar
                         ? 'translate-y-0 bg-white backdrop-blur-none dark:bg-slate-900'
                         : '-translate-y-full'
               } px-3 md:px-10 lg:px-16 xl:px-20 2xl:px-32 h-16 flex items-center justify-between bg-white/90 backdrop-blur-md dark:bg-slate-900`}
          >
               {/* logo----------------------------------------------------------------------------- */}
               <div className="text-orange-500  font-bold">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="29"
                         height="29"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         className="lucide lucide-store-icon lucide-store"
                    >
                         <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                         <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                         <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                         <path d="M2 7h20" />
                         <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
                    </svg>
               </div>
               {/* search bar----------------------------------------------------------------------- */}
               <div>
                    <div className="flex items-center">
                         <div
                              className="rounded-full bg-orange-400 p-2 text-white cursor-pointer size-7 md:size-8"
                              onClick={() => setShowInput((prev) => !prev)}
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="14"
                                   height="14"
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
                              className={`ml-2 rounded-full px-4 py-[1px] placeholder:text-sm md:placeholder:text-lg md:py-1 border border-orange-500 placeholder:text-orange-400  outline-none transition-all duration-500 bg-white text-black ${
                                   showInput
                                        ? 'w-[150px] md:w-[300px] lg:w-[340px] opacity-100'
                                        : 'w-0 opacity-0'
                              } overflow-hidden`}
                         />
                    </div>
               </div>
               {/* Links--------------------------------------------------------------------------------- */}
               <div className="hidden md:flex items-center gap-5  ">
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
               {/* ModeToggle------------------------------------------------------------------------------- */}
               <div className="hidden md:block ">
                    <ModeToggle />
               </div>
               {/* Mobile Menu------------------------------------------------------------------------------- */}

               <div className=" block md:hidden ">
                    <SmalMenu />
               </div>
          </div>
     );
}

export default Navbar;
