import "src/styles/globals.css";
import Head from "next/head";
import { useTodos } from "src/component/State/Todos";

function MyApp({ Component, pageProps }) {
  const states = useTodos();
  return <Component {...pageProps} {...states} />;
}

export default MyApp;
