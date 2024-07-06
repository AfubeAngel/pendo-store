import Nav from "@/components/Navigation";
import Head from 'next/head';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pendo Store</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
