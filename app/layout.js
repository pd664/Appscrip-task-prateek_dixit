import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from './providers';

export const metadata = {
  title:'Mätta Muse - Online Shopping for Clothes, Electronics, Jewelry, and More',
  description: "Shop for clothes, electronics, jewelry, household items, and much more at Mättä Muse. Find amazing deals and products for all your needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
