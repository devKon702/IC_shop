import SelectedAttributeFilter from "@/components/features/filter/selected-attribute-filter";
import SideAttributeFilter from "@/components/features/filter/side-attribute-filter";
import SideCategoryFilter from "@/components/features/filter/side-category-filter";
import ProductPagination from "@/components/features/product/product-pagination";
import React from "react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl uppercase">{slug}</h2>
      <div className="grid grid-cols-12 space-x-4">
        <div className="col-span-3 space-y-4">
          <SideAttributeFilter></SideAttributeFilter>
          <SideCategoryFilter></SideCategoryFilter>
        </div>
        <div className="col-span-9 space-y-2">
          <SelectedAttributeFilter></SelectedAttributeFilter>
          <ProductPagination></ProductPagination>
        </div>
      </div>
    </div>
  );
}
