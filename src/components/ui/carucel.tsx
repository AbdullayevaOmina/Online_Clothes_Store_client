"use client";
import { Carousel } from "flowbite-react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

export function MyCarousel() {
  return (
    <div className="h-56 sm:max:h-64 xl:h-80 2xl:max:h-96">
      <Carousel slideInterval={3000}>
        <img src={img2} alt="IMG" />
        <img src={img1} alt="IMG" />
        <img src={img3} alt="IMG" />
        <img src={img4} alt="IMG" />
        <img src={img5} alt="IMG" />
      </Carousel>
    </div>
  );
}
