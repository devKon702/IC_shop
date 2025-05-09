import ClampText from "@/components/common/clamp-text";
import { IMockProduct } from "@/types/product";
import { formatPrice } from "@/utils/number";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: IMockProduct;
}

export default function ProductCard({
  product: { image, name, price },
}: ProductCardProps) {
  return (
    <Link
      target="_blank"
      href="/ram"
      className="flex flex-col space-y-3 rounded-sm cursor-pointer bg-white border py-2 px-3 hover:border-primary"
    >
      <div className="w-full h-36">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        ></Image>
      </div>
      <ClampText
        text={name}
        lines={2}
        className="hover:text-primary"
      ></ClampText>
      <p className="font-bold mt-auto">{formatPrice(price) + "đ"}</p>
    </Link>
  );
}
