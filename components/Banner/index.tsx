import {
  BROWSE_DEALS_ROUTE,
  BROWSE_GIFT_GUIDE_ROUTE,
} from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="banner-container">
      <div className="banner-image">
        <Image
          fill
          src="/img/banner.png"
          alt="Banner picture"
          priority={true}
        />
      </div>
      <div className="banner-info">
        <div className="banner-title">Inhale. Gift. Exhale.</div>
        <div className="banner-description">
          The gifts you need, stress-free. Shop the best of Google with ease.
        </div>
        <div className="banner-buttons">
          <Link href={BROWSE_DEALS_ROUTE} className="button-transparent">
            Browse deals
          </Link>
          <Link href={BROWSE_GIFT_GUIDE_ROUTE} className="button-link">
            Browse the gift guide
          </Link>
        </div>
      </div>
    </section>
  );
}
