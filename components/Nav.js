import React from "react";

import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav(props) {
  const router = useRouter();
  return (
    <nav className="relative ">
      <div
        className="text-white flex px-10 
      sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20
       overflow-x-scroll
       last:pr-20 scrollbar-hide
       "
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className=" cursor-pointer m-2 tracking-widest transition duration-100 hover:text-slate-200 active:text-neutral-100 transform hover:scale-125"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#2b2b2b] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
