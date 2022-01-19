import "../styles/globals.css";
import Layout from "../components/layout";
import AuthComponent from "../components/auth";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  //za STRANICE KOJE TRIBAJU POSTAVI auth property kod exportanja na true i nnih wrapaj u session provider i u njima provjeravaj ima li seseiju ako ne redirect na login
  //TO SU trade i ACCOUNT
  //INACE NA OSTALIMA NE TRIBAMO WRAPAT U SESSION PROVIDER KAO NA https://next-auth.js.org/getting-started/client, NASLOV:Custom Client Session Handling
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="BitEx is a cryptocurrency marketplace which provides you with
          everything you need for crypto trading. Get latest news from crypto
          world and trade your favourite crypto assets to secure high profit.
          Simple as that. Try it now, thank us later."
        />
        <link rel="icon" href="/favicon.ico" key="icon" />
        <title>BitEx</title>
      </Head>
      {/*By wrapping your whole application in this provider, we can use React Context to make a useSession hook available in any page / component in your app and share session state. */}
      <SessionProvider session={session}>
        {Component.needsAuthentication ? (
          <AuthComponent>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthComponent>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionProvider>
    </>
  );
}

export default MyApp;
