import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Header from "../scr/components/organism/header";
import Footer from "../scr/components/organism/footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
