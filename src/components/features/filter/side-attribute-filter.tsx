"use client";
import AttributeValuePopup from "@/components/features/filter/attribute-value-popup";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

export default function SideAttributeFilter() {
  return (
    <div className="rounded-sm overflow-hidden shadow-xl bg-white">
      <div className="bg-primary text-white p-2 flex justify-start items-center space-x-2 font-bold">
        <i className="bx bxs-filter-alt"></i>
        <span>Lọc sản phẩm</span>
      </div>
      <AttributeFilterBody></AttributeFilterBody>
    </div>
  );
}

function AttributeFilterBody() {
  const [highlight, setHighlight] = React.useState(false);
  return (
    <Popover onOpenChange={(open) => setHighlight(open)}>
      <PopoverTrigger
        className={`w-full p-2 hover:bg-primary-light cursor-pointer ${
          highlight ? "bg-primary-light" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <span>Ram 24GB</span>
          <i className="bx bx-chevron-right"></i>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="start"
        className="shadow-2xl border-2"
      >
        <AttributeValuePopup></AttributeValuePopup>
      </PopoverContent>
    </Popover>
  );
}
