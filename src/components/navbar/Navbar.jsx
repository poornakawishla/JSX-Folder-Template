import React, { useState } from 'react';
import Primarybutton from '../primarybutton/Primarybutton';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-white dark:bg-zinc-900 shadow-lg rounded-xl px-4 py-2  max-w-md sm:max-w-xl md:max-w-2xl">
            <div className="flex justify-between items-center gap-10 px-10">

                <Primarybutton
                    buttonText={
                        <span className="inline-flex items-center gap-[2vw] px-2">
                            Home
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-house"
                            >
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                        </span>

                    }
                    buttonLink="https://poornajsx.netlify.app/"
                    className="hover:opacity-90 text-sm px-0 py-0 
                    bg-gradient-to-tr from-[#3B76F6] to-[#5F8FFF] text-gray-200 font-semibold rounded-[8px] shadow-md transition"
                />
                {/* Product List */}
                <div
                    className="relative inline-block text-left"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <button className="px-4 py-2 bg-blue-600 text-white w-40 rounded-md hover:bg-blue-700 transition">
                        Products
                    </button>


                    {isOpen && (
                        <div className="absolute bottom-1 left-[-60px] mb-8  bg-[#1C243B]  rounded-md shadow-lg z-10">
                            <ul className="py-2 text-gray-700">
                                <li className="px-4 py-2 hover:bg-[#1C243B] cursor-pointer w-80">
                                    <Primarybutton
                                        buttonText={
                                            <span className="flex items-center gap-30 px-2">
                                                Link Library
                                                <svg xmlns="http://www.w3.org/2000/svg" 
                                                width="24" 
                                                height="24" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                stroke-width="2" 
                                                stroke-linecap="round" 
                                                stroke-linejoin="round" 
                                                class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
                                                    <path d="M7 7h10v10" />
                                                    <path d="M7 17 17 7" />
                                                    </svg>
                                            </span>

                                        }
                                        buttonLink="https://poornajsx.netlify.app/"
                                        className="hover:opacity-90 w-full  text-sm px-0 py-0 
                                        text-gray-200 font-semibold rounded-[8px] shadow-md transition"
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </div>

    )
}

export default Navbar