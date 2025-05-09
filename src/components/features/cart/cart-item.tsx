"use client";
import Counter from "@/components/common/counter";
import { formatPrice } from "@/utils/number";
import Image from "next/image";
import React from "react";

export default function CartItem() {
  const [quantity, setQuantity] = React.useState(1);
  const [check, setCheck] = React.useState(false);
  return (
    <div
      className="flex items-center justify-between space-x-6 p-2 border-b-2 cursor-pointer hover:bg-background"
      onClick={() => setCheck(!check)}
    >
      <div className="flex-1 flex items-center justify-around space-x-5">
        <div
          className="size-5 border rounded-full cursor-pointer bg-white border-primary data-[checked=true]:bg-primary shrink-0"
          data-checked={check}
          onClick={() => setCheck(!check)}
        ></div>
        <div className="flex space-x-2">
          <Image
            src={"/uploads/ic.jpg"}
            alt="IC"
            width={200}
            height={300}
            className="w-1/3"
          />
          <div className="flex flex-col">
            <p>ESP8266 Nano V3 Rasberry</p>
          </div>
        </div>
      </div>
      <table className="w-fit">
        <tbody>
          <tr className="border-b w-full">
            <td className="border-r p-2">1+</td>
            <td className="p-2">99.000</td>
          </tr>
          <tr className="border-b w-full">
            <td className="border-r p-2">10+</td>
            <td className="p-2">89.000</td>
          </tr>
        </tbody>
      </table>
      <div className="" onClick={(e) => e.stopPropagation()}>
        <Counter
          min={1}
          max={999}
          value={quantity}
          onDownClick={() => {
            setQuantity(Math.max(1, quantity - 1));
          }}
          onUpClick={() => setQuantity(Math.min(999, quantity + 1))}
          onInputChange={(e) =>
            setQuantity(Math.max(1, Math.min(999, +e.target.value)))
          }
        ></Counter>
      </div>
      <div className="flex flex-col min-w-24">
        <span className="font-semi opacity-50 text-sm">99.000/cái</span>
        <span className="font-bold text-xl">
          {formatPrice(99000 * quantity)}
        </span>
      </div>
    </div>
  );
}
