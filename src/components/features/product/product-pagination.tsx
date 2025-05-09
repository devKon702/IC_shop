import ProductList from "@/components/features/product/product-list";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
const mockProductData = [
  {
    id: "r1",
    name: "Combo 100 điện trở 1/4W",
    price: 1000,
    image: "/uploads/ic.jpg",
  },
  {
    id: "r2",
    name: "Combo điện trở chân đồng",
    price: 1200,
    image: "/uploads/ic.jpg",
  },
];
export default function ProductPagination() {
  return (
    <div>
      <ProductList products={mockProductData} cols={4}></ProductList>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
