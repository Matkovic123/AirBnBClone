import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { set } from "date-fns";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate || new Date());
    setEndDate(ranges.selection.endDate || new Date());
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="airbnb"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 text-red-400 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer text-gray-500">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 text-gray-500 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full px-2 py-1">
          <Bars3Icon className="h-6 text-gray-500 cursor-pointer" />
          <UserCircleIcon className="h-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(Number(e.target.value))}
              min={1}
              max={99}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
