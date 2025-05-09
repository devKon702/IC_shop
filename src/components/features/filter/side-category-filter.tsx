import React from "react";

export default function SideCategoryFilter() {
  return (
    <div className="flex flex-col w-full items-start bg-white shadow-xl rounded-sm overflow-hidden">
      <p className="font-bold p-2 bg-primary w-full">Danh mục</p>
      <ul className="px-2 w-full">
        <li className="p-2 hover:text-primary cursor-pointer">1</li>
        <li className="p-2 hover:text-primary cursor-pointer">2</li>
        <li className="p-2 hover:text-primary cursor-pointer">3</li>
        <li className="p-2 hover:text-primary cursor-pointer">4</li>
        <li className="p-2 hover:text-primary cursor-pointer">5</li>
      </ul>
    </div>
  );
}
