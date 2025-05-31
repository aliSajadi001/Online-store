import {
     Sheet,
     SheetContent,
     SheetDescription,
     SheetHeader,
     SheetTitle,
     SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { ModeToggle } from './Theme';
function SmalMenu() {
     return (
          <Sheet>
               <SheetTrigger>
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         className="lucide lucide-align-justify-icon lucide-align-justify"
                    >
                         <path d="M3 12h18" />
                         <path d="M3 18h18" />
                         <path d="M3 6h18" />
                    </svg>
               </SheetTrigger>
               <SheetContent>
                    <SheetHeader>
                         <SheetTitle>Are you absolutely sure?</SheetTitle>
                         <SheetDescription>
                            {/* Links------------------------------------------------------------------------------------------------------ */}
                              <div className="w-full flex flex-col items-end justify-center space-y-2">
                                   <Link
                                        href="/"
                                        className=" w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800 text-orange-500 hover:bg-stone-200   font-bold transi duration-300 ease-in-out justify-start rounded-lg"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/"
                                        className=" w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800 text-orange-500 hover:bg-stone-200   font-bold transi duration-300 ease-in-out justify-start rounded-lg"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/"
                                        className=" w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800 text-orange-500 hover:bg-stone-200   font-bold transi duration-300 ease-in-out justify-start rounded-lg"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/"
                                        className=" w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800 text-orange-500 hover:bg-stone-200   font-bold transi duration-300 ease-in-out justify-start rounded-lg"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/"
                                        className=" w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800 text-orange-500 hover:bg-stone-200   font-bold transi duration-300 ease-in-out justify-start rounded-lg"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/"
                                        className=" w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800 text-orange-500 hover:bg-stone-200   font-bold transi duration-300 ease-in-out justify-start rounded-lg"
                                   >
                                        Home
                                   </Link>
                                   {/* Logout Icon----------------------------------------------------------------------------------------------------------------- */}
                                   <span className=" cursor-pointer w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800  hover:bg-slate-200 text-orange-500  font-bold transi duration-300 ease-in-out justify-start rounded-lg">
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             className="lucide lucide-log-out-icon lucide-log-out"
                                        >
                                             <path d="m16 17 5-5-5-5" />
                                             <path d="M21 12H9" />
                                             <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        </svg>
                                   </span>
                                   {/* Profile Icon------------------------------------------------------------------------------------------------------- */}
                                   <span className=" cursor-pointer w-full py-3 px-8  flex items-end flex-col  dark:hover:bg-slate-800  hover:bg-slate-200 text-orange-500  font-bold transi duration-300 ease-in-out justify-start rounded-lg">
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             className="lucide lucide-user-icon lucide-user"
                                        >
                                             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                             <circle cx="12" cy="7" r="4" />
                                        </svg>
                                   </span>

                              </div>
                              <div className='w-full flex flex-col items-end py-3 px-8 '>
                                <ModeToggle/>
                              </div>
                         </SheetDescription>
                    </SheetHeader>
               </SheetContent>
          </Sheet>
     );
}
export default SmalMenu;
