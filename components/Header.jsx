import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import HeaderItem from "./HeaderItem";

import { HomeIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
import { LightningBoltIcon } from "@heroicons/react/outline";
import { CollectionIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between m-5 items-center h-auto">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem Icon={HomeIcon} title={"HOME"} />
        <HeaderItem Icon={SearchIcon} title={"SEARCH"} />
        <HeaderItem Icon={BadgeCheckIcon} title={"VERIFIED"} />
        <HeaderItem Icon={UserIcon} title={"ACCOUNT"} />
        <HeaderItem Icon={LightningBoltIcon} title={"TRENDING"} />
        <HeaderItem Icon={CollectionIcon} title={"COLLECTIONS"} />
      </div>
      <Image
        src={logo}
        width="200px"
        height="100px"
        className="object-contain justify-end flex-row"
      />
    </header>
  );
}
