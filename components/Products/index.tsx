"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Products() {
  const mockProducts = [
    {
      title: "Google Pixel Watch",
      isNew: true,
      img: "/img/products/google_pixel_watch.png",
      slug: "google_pixel_watch",
    },
    {
      title: "Pixel 7 Pro",
      isNew: true,
      img: "/img/products/pixel_7_pro.png",
      slug: "pixel_7_pro",
    },
    {
      title: "Pixel 7",
      isNew: true,
      img: "/img/products/pixel_7.png",
      slug: "pixel_7",
    },
    {
      title: "Pixel Buds Pro",
      isNew: false,
      img: "/img/products/pixel_buds_pro.png",
      slug: "pixel_buds_pro",
    },
    {
      title: "Nest Doorbells",
      isNew: true,
      img: "/img/products/nest_doorbells.png",
      slug: "nest_doorbells",
    },
    {
      title: "Nest Wifi Pro",
      isNew: true,
      img: "/img/products/nest_wifi_pro.png",
      slug: "nest_wifi_pro",
    },
  ];

  return (
    <section className="products-container">
      <div className="products-title">Sneak a peek. For you or for them.</div>
      <div className="products-list">
        <Swiper
          spaceBetween={23}
          slidesPerView="auto"
          className="products-slider"
        >
          {mockProducts?.map(({ slug, title, isNew, img }) => (
            <SwiperSlide className="product-slide" key={slug}>
              <div>
                <Link href={`/${slug}`} className="product-container">
                  <div className="product-card">
                    <div className="product-image">
                      <Image src={img} fill alt={title} />
                    </div>
                    {isNew && <div className="product-badge__new">New</div>}
                  </div>
                  <div className="product-title">{title}</div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="products-hr" />
      </div>
    </section>
  );
}
