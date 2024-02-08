import Image from "next/image";
import Link from "next/link";

export default function Article() {
  return (
    <article className="article-container">
      <div className="article-image">
        <Image src="/img/articles/nba.png" alt="NBA article" fill />
      </div>
      <div className="article-text">
        <div className="article-title">
          This holiday season, Google Pixel is giving back.
        </div>
        <div className="article-description">
          {`We're contributing $1 million to the NBA Foundation to help advance
          HBCU students in their careers across STEM, sports, and media
          industries.`}
        </div>
        <Link href="/" className="article-link">
          Learn more
        </Link>
      </div>
    </article>
  );
}
