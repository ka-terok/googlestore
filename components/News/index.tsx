"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const mockNews = [
    {
      subTitle: "Google Pixel Watch",
      title: "Help by Google. Health by Fitbit.",
      href: "/",
      img: "/img/news/image1.png",
    },
    {
      subTitle: "Nest Wifi Pro with Wi-Fi 6E",
      title: "The better way to Wi-Fi.",
      href: "/",
      img: "/img/news/image2.png",
    },
    {
      subTitle: "Nest Doorbell (wired)",
      title: "Know more. No charging.",
      href: "/",
      img: "/img/news/image3.png",
    },
    {
      subTitle: "Pixel Pass",
      title: "One price for all things Pixel.",
      href: "/",
      img: "/img/news/image4.png",
    },
    {
      subTitle: "Switch to Pixel",
      title: "Here's what #TeamPixel has to say about it.",
      href: "/",
      img: "/img/news/image5.png",
    },
  ];

  return (
    <section className="cards-container">
      <div className="cards-container-3">
        {mockNews?.slice(0, 3)?.map(({ title, subTitle, href, img }, key) => (
          <Link className="card-thin" href={href} key={key + "top"}>
            <div className="card-text">
              <div className="card-subtitle">{subTitle}</div>
              <div className="card-title">{title}</div>
              <Link className="card-button" href={href}>
                Learn more
              </Link>
            </div>
            <div className="card-image">
              <Image src={img} fill alt={title} />
            </div>
          </Link>
        ))}
      </div>
      <div className="cards-container-2">
        {mockNews?.slice(3, 5)?.map(({ title, subTitle, href, img }, key) => (
          <Link
            className={classNames("card-big", {
              "card__light-orange": key === 1,
              "card__green-blue": key < 1,
            })}
            href={href}
            key={key + "bottom"}
          >
            <div className="card-text">
              <div className="card-subtitle">{subTitle}</div>
              <div className="card-title">{title}</div>
              <Link className="card-button" href={href}>
                Learn more
              </Link>
            </div>
            <div className="card-image">
              <Image src={img} fill alt={title} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
