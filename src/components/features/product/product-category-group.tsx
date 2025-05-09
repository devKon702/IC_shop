import ProductList from "@/components/features/product/product-list";
import { IMockProduct, IMockProductCategory } from "@/types/product";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Link from "next/link";
import React from "react";

interface ProductCatergoryGroupProps {
  catergory: IMockProductCategory;
}

export default function ProductCategoryGroup({
  catergory: { name, types },
}: ProductCatergoryGroupProps) {
  const products: IMockProduct[] = [];
  types.forEach((type) =>
    type.subcategories.forEach((sub) => products.push(...sub.products))
  );
  return (
    <div className="rounded-md shadow-md bg-white mb-4 p-2">
      {/* Title */}
      <div className="flex justify-between items-center px-4 py-2 border-b-2 mb-2">
        <Link href="" className="font-bold text-primary">
          {name}
        </Link>
        <HoverCard openDelay={0} closeDelay={20}>
          <HoverCardTrigger className="cursor-pointer hover:text-primary px-3 font-bold text-sm">
            Xem thêm
          </HoverCardTrigger>
          <HoverCardContent className="shadow-lg rounded-md p-2 box-border bg-white">
            <ul
              className={`grid grid-cols-${
                types.length <= 4 ? types.length : 4
              } space-x-4 py-2`}
            >
              {types.map((item) => (
                <Link key={item.id} href="#" className="border-l-2 px-1">
                  {item.category}
                </Link>
              ))}
            </ul>
          </HoverCardContent>
        </HoverCard>
      </div>
      {/* Product List */}
      <ProductList products={products}></ProductList>
    </div>
  );
}
