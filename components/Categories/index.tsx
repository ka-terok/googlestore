import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const mockCategories = [
    { title: "Cameras", img: "/img/categories/cameras.png", href: "/cameras" },
    {
      title: "Doorbells",
      img: "/img/categories/doorbells.png",
      href: "/doorbells",
    },
    {
      title: "Streaming",
      img: "/img/categories/streaming.png",
      href: "/streaming",
    },
    {
      title: "Packages",
      img: "/img/categories/packages.png",
      href: "/packages",
    },
  ];

  return (
    <div className="categories-container">
      <div className="categories-title">Shop by category.</div>
      <ul className="categories-list">
        {mockCategories?.map(({ title, img, href }, key) => (
          <li key={key}>
            <Link
              href={href}
              className="category-card"
            >
              <div className="category-image">
                <Image fill src={img} alt={title} />
              </div>
              <div className="category-title">{title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
