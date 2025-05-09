"use client";
import { useFilter } from "@/libs/hooks/useFilter";
import { useToggleSelect } from "@/libs/hooks/useToggleSelect";
import React from "react";

const attrArray = ["8GB", "16GB", "12GB"];

export default function AttributeValuePopup() {
  const [search, setSearch] = React.useState("");
  const [selectedItems, toggle] = useToggleSelect<string>([], (a, b) => a == b);
  const filteredData = useFilter<string>(
    attrArray,
    (item, query) => item.toLowerCase().includes(query.trim().toLowerCase()),
    search
  );

  return (
    <div>
      <div className="border-2 border-gray-500 rounded-xl flex items-center justify-between p-1 px-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm"
          className="outline-none border-none"
        />
        <i className="bx bx-search"></i>
      </div>

      <ul className="p-2 space-y-2">
        {filteredData.map((item, index) => (
          <li
            key={index}
            className={`border-s-2 border-s-transparent ${
              selectedItems.some((val) => val === item)
                ? "border-primary text-primary"
                : ""
            } cursor-pointer`}
            onClick={() => toggle(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
