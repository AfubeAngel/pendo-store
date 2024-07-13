import Nav from "@/components/Navigation";
import Head from 'next/head';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pendo Store</title>
      </Head>
      <Nav />
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}
