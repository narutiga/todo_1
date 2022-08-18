import React from "react";
import "src/lib/styles/globals.css";
import { useTodos } from "src/lib/state";

function MyApp({ Component, pageProps }) {
  const states = useTodos();
  return <Component {...pageProps} {...states} />;
}

export default MyApp;
