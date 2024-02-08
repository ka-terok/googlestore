import Image from "next/image";
import Link from "next/link";

export default function TransparentArticle() {
  return (
    <article className="article-container">
      <div className="article-image">
        <Image src="/img/articles/article2.png" alt="NBA article" fill />
      </div>
      <div className="article-text  article-text__transparent">
        <div className="article-title article-title__19">
          Putting sustainability to work.
        </div>
        <div className="article-description article-description__22">
          We’re committed to using recycled or renewable material in all Pixel,
          Nest, and Fitbit products by 2025.
        </div>
        <Link href="/" className="button-transparent article-button">
          Learn more
        </Link>
      </div>
    </article>
  );
}
