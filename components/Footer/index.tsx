import Link from "next/link";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import YouTube from "../Icons/Youtube";
import TikTok from "../Icons/TikTok";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-container">
      <nav>
        <div className="footer-list">
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link">
                Placing an order
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Shipping options
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Tracking a package
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Country availability
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Repairs
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Installation
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Ideas & Info
              </Link>
            </li>
          </ul>
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Financing
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Device recycling
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Sustainability
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Gift returns
              </Link>{" "}
            </li>
            <li>
              <Link href="/" className="footer-link">
                Refurbished
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Trade-in
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Pixel for Business
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-link">
                Locations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="footer-container__bottom">
        <hr className="footer-hr" />
        <div className="footer-panel">
          <ul className="footer-icons">
            <li>
              <Link href="/" className="footer-icon" aria-label="twitter">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-icon" aria-label="instagram">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-icon" aria-label="facebook">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-icon" aria-label="youTube">
                <YouTube />
              </Link>
            </li>
            <li>
              <Link href="/" className="footer-icon" aria-label="tikTok">
                <TikTok />
              </Link>
            </li>
          </ul>
          <nav>
            <ul className="footer-links__panel">
              <li>
                <button className="footer-link__panel">
                  <div className="footer-lang">
                    <Image fill src="/img/flag.png" alt="flag" />
                  </div>
                  United States
                </button>
              </li>
              <li>
                <Link href="/" className="footer-link__panel">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-link__panel">
                  Google Nest Commitment to Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-link__panel">
                  Sales Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-link__panel">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-link__panel">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
