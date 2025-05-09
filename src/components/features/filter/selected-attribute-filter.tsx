import React from "react";

export default function SelectedAttributeFilter() {
  return (
    <div className="p-3 bg-white rounded-md shadow-xl text-sm">
      <ul className="space-y-3">
        <li className="flex items-center space-x-2">
          <span className="font-bold">Số chân:</span>
          <span className="rounded-4xl border-2 bg-background px-2 py-1 cursor-pointer flex items-center">
            12 chân
            <i className="bx bx-x ms-2 text-lg my-0"></i>
          </span>
          <span className="rounded-4xl border-2 bg-background px-2 py-1 cursor-pointer flex items-center">
            8 chân
            <i className="bx bx-x ms-2 text-lg my-0"></i>
          </span>
          <span className="rounded-4xl border-2 bg-background px-2 py-1 cursor-pointer flex items-center">
            20 chân
            <i className="bx bx-x ms-2 text-lg my-0"></i>
          </span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="font-bold">Ram:</span>
          <span className="rounded-4xl border-2 bg-background px-2 py-1 cursor-pointer flex items-center">
            12GB
            <i className="bx bx-x ms-2 text-lg my-0"></i>
          </span>
          <span className="rounded-4xl border-2 bg-background px-2 py-1 cursor-pointer flex items-center">
            8GB
            <i className="bx bx-x ms-2 text-lg my-0"></i>
          </span>
        </li>
      </ul>
      <button className="rounded-sm bg-primary text-white cursor-pointer px-3 py-1 flex justify-between items-center ms-auto">
        <i className="bx bxs-filter-alt me-2"></i>
        Lọc
      </button>
    </div>
  );
}
