import React from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
        src='https://links.papareact.com/qd3'
        fill
        alt="airbnb"
        objectFit="contain"
        objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input className="pl-5 bg-transparent outline-none flex-grow" type="text" placeholder="Start your search"/>
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 text-red-400 cursor-pointer md:mx-2"/>
      </div>
      {/* right */}
      <div></div>
    </header>
  );
}
