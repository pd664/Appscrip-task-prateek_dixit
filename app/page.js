import Head from 'next/head';
import HomePage from "./components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mätta Muse - Shop Clothes, Electronics, Jewelry, and More</title>
        <meta
          name="description"
          content="Shop men's casual T-shirts, women's jewelry, and electronics like SSDs at Mätta Muse. Discover premium products at great prices!"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "mainEntity": [
                {
                  "@type": "Product",
                  "name": "Men's Casual Premium Slim Fit T-Shirts",
                  "description": "Stylish and comfortable men's casual T-shirt in a slim fit design, perfect for daily wear.",
                  "sku": "MCT123",
                  "brand": {
                    "@type": "Brand",
                    "name": "Mätta Muse"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": "29.99",
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                  "description": "Exquisite dragon-themed bracelet made from a blend of gold and silver, designed for women who love unique jewelry.",
                  "sku": "JHBR456",
                  "brand": {
                    "@type": "Brand",
                    "name": "John Hardy"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": "499.99",
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                  "description": "Fast and reliable 1TB SanDisk SSD with SATA III interface, perfect for boosting your computer's performance.",
                  "sku": "SDSD1234",
                  "brand": {
                    "@type": "Brand",
                    "name": "SanDisk"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": "89.99",
                    "itemCondition": "https://schema.org/NewCondition",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            }),
          }}
        />
      </Head>

      <main><HomePage /></main>
    </div>
  );
}
