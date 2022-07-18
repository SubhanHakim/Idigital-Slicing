import React from "react";

export default function Button(props) {
  return (
    <button className="py-2 px-8 border border-[#2e2e2e] rounded-[30px] transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
      <a href="">{props.name}</a>
    </button>
  );
}
