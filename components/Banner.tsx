/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt="forest"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-lg rounded-full
        font-bold my-3 active:scale-90 hover:shadow-xl transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
