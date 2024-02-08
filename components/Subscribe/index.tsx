import { SIGN_UP_ROUTE } from "@/constants/routes";
import Link from "next/link";
import Tag from "../Icons/Tag";

export default function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-icon">
        <Tag />
      </div>
      <div className="subscribe-title">
        Keep me updated about devices, news, tips, and offers from Google Store.
      </div>
      <button className="subscribe-button">Log in and sign up</button>
      <Link className="link" href={SIGN_UP_ROUTE}>
        or enter email address
      </Link>
    </div>
  );
}
