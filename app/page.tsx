import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";
import TransparentArticle from "@/components/TransparentArticle";
import dynamic from "next/dynamic";

const News = dynamic(() => import("@/components/News"), { ssr: false });
const Categories = dynamic(() => import("@/components/Categories"), {
  ssr: false,
});
const Explores = dynamic(() => import("@/components/Explores"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="container-80">
        <Banner />
        <Products />
        <Article />
        <News />
        <Categories />
        <Explores />
        <TransparentArticle />
        <Subscribe />
        <div className="correction-container">
          <span className="correction-badge">*</span>
          <div className="correction-text">
            {`Here's what you will pay for Pixel Pass: You'll be required to
            finance your Pixel Pass purchase with 0% APR Google Store Financing.
            The full cost of your Pixel and Preferred Care is spread out over 24
            monthly payments. The Google services included in Pixel Pass will be
            charged to your Google Store Financing account each month. Your
            Pixel Pass subscription will appear as two separate transactions
            every month on your Google Store Financing account. From $45/month:
            $648.68 at 0% APR with 24 equal monthly payments = $27.03/month plus
            Pixel Pass services (Google One 200 GB) = $17.97/month for a Total
            monthly payment = $45/month. Adjusted for taxes and shipping.`}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
