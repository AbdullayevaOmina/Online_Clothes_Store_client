"use client";
import { Carousel } from "flowbite-react";

export function MyCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px]">
      <Carousel slideInterval={3000}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="IMG" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="IMG" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="IMG" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="IMG" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="IMG" />
      </Carousel>
    </div>
  );
}
