import Image from "next/image";
import Link from "next/link";

export default function Explores() {
  return (
    <div className="cards-container">
      <div className="cards-container-2">
        <Link
          className="card-big card__light-brown"
          href={"/explores/watches"}
        >
          <div className="card-text">
            <div className="card-subtitle">Watches</div>
            <div className="card-title">Keep moving. Keep improving.</div>
            <Link className="card-button" href={"/explores/watches"}>
              Explore watches
            </Link>
          </div>
          <div className="card-image">
            <Image fill src="/img/explores/image1.png" alt="Explore watches" />
          </div>
        </Link>
        <Link
          className="card-big card__blue-blue"
          href={"/explores/earbuds"}
        >
          <div className="card-text">
            <div className="card-subtitle">Earbuds</div>
            <div className="card-title">Great sound. All around.</div>
            <Link className="card-button" href={"/explores/earbuds"}>
              Explore earbuds
            </Link>
          </div>
          <div className="card-image ">
            <Image fill src="/img/explores/image2.png" alt="Explore earbuds" />
          </div>
        </Link>
      </div>
    </div>
  );
}
