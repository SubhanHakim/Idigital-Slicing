import React from "react";

export default function Button2(props) {
  return (
    <button className="py-2 px-8 border border-[#D71921] rounded-[5px] text-[#D71921] transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
      <a href="">{props.name}</a>
    </button>
  );
}
