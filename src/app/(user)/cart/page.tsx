import CartItem from "@/components/features/cart/cart-item";
import React from "react";

export default function CartPage() {
  return (
    <div className="grid grid-cols-12 space-x-3">
      <div className="col-span-9 rounded-md bg-white p-2 flex flex-col shadow-md">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
      <div className="col-span-3 rounded-md bg-white px-2 py-4 h-fit shadow-md">
        <p className="font-bold text-2xl mb-5">Tổng đơn hàng</p>
        <div className="my-2 space-x-2 flex justify-between">
          <span className="font-medium">Số lượng:</span>
          <span>3 sản phẩm</span>
        </div>
        <div className="my-2 space-x-2 flex justify-between">
          <span className="font-medium">Tổng:</span>
          <span>247.000</span>
        </div>
        <div className="my-2 space-x-2 flex justify-between">
          <span className="font-medium">Thuế:</span>
          <span>0</span>
        </div>
        <div className="w-full h-[4px] bg-black"></div>
        <div className="my-2 space-x-2 flex justify-between">
          <span className="font-bold text-xl">Thành tiền:</span>
          <span>247.000</span>
        </div>
        <button className="w-full bg-primary font-bold text-white py-2 cursor-pointer opacity-80 hover:opacity-100">
          Thanh toán
        </button>
      </div>
    </div>
  );
}
