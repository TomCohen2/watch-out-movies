import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col group mt-5 text-gray-50 hover:text-slate-990 items-center cursor-pointer w-12 sm:w-20">
      <Icon className="h-7 mb-1 group-hover:animate-bounce" />
      <p className="text-gray-50  opacity-0 group-hover:opacity-100  tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
