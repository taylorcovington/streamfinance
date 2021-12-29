import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { client } from "../client/graphql/client";
import "../styles/globals.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </Provider>
  );
}

export default CustomApp;
