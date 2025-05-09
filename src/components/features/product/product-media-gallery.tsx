"use client";
import ImageMagnifier from "@/components/common/image-magnifier";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const imageList = [
  "/uploads/ic.jpg",
  "/uploads/banner-1.jpg",
  "/uploads/banner-2.jpg",
  "/uploads/banner-3.jpg",
];

export default function ProductMediaGallery() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [mainImage, setMainImage] = React.useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  React.useEffect(() => {
    setMainImage(imageList[selectedIndex]);
  }, [selectedIndex]);

  return (
    <div className="col-span-4 p-2 rounded-md bg-white">
      <ImageMagnifier src={mainImage} imageAlt="IC" zoom={2}></ImageMagnifier>
      {/* <Image
        src={"/uploads/ic.jpg"}
        alt="Image"
        width={200}
        height={200}
        className="w-full object-cover"
      ></Image> */}
      <Carousel className="mt-3" setApi={setApi}>
        <CarouselContent className="">
          {imageList.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4 cursor-pointer">
              <Image
                src={item}
                alt="Image"
                width={200}
                height={200}
                className="w-full object-cover"
                onClick={() => {
                  setSelectedIndex(index);
                }}
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
