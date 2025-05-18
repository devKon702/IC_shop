import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ROUTE } from "@/constants/routes";
import { IMockProductCategory } from "@/types/product";
import { HoverCard } from "@radix-ui/react-hover-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryBarProps {
  categories: IMockProductCategory[];
}

export default function CategoryBar({
  categories: catergories,
}: CategoryBarProps) {
  return (
    <ul className="flex flex-wrap justify-center space-x-1 py-2 bg-white">
      {catergories.map((item) => (
        <HoverCard key={item.id} openDelay={0} closeDelay={20}>
          <HoverCardTrigger className="flex flex-col items-center justify-between border-b-2 border-transparent hover:border-b-primary cursor-pointer p-1 flex-1 min-w-36 m-0">
            <Image
              src={item.image}
              width={20}
              height={20}
              alt={item.name}
            ></Image>
            <p className="uppercase text-sm">{item.name}</p>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit mx-3">
            <ul
              className={`grid grid-cols-${
                item.types.length <= 4 ? item.types.length : 4
              } space-x-8 space-y-2 list-none`}
            >
              {item.types.map((value) => (
                <div
                  key={value.id}
                  className="flex flex-col space-y-2 border-l-2 px-2"
                >
                  <Link
                    href={`${ROUTE.category}/ram`}
                    className="cursor-pointer text-primary"
                  >
                    {value.category}
                  </Link>
                  <ul>
                    {value.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href="#"
                          className="text-sm hover:text-primary cursor-pointer py-1"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </HoverCardContent>
        </HoverCard>
      ))}
    </ul>
  );
}
