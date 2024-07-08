import React, { useEffect, useState } from "react";
import "../public/assets/scss/app.scss";
import { ToastContainer } from "react-toastify";
import TapTop from "../components/common/widgets/Tap-Top";



import Helmet from "react-helmet";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../helpers/apollo";

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];
    document.body.classList.add("dark");

    let timer = setTimeout(function () {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        {isLoading ? (
          <div className="loader-wrapper">{url === "Christmas" ? <div id="preloader"></div> : <div className="loader"></div>}</div>
        ) : (
          <>
            {/* <MessengerCustomerChat
            pageId="2123438804574660"
            appId="406252930752412"
            htmlRef="https://connect.facebook.net/en_US/sdk.js"
          /> */}
            <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              {/* <Head>
              <link rel="icon" type="image/x-icon" href={favicon} />
            </Head> */}
              <title>Momina Designer</title>
            </Helmet>
            <div>
              
                          <Component {...pageProps} />
                     
              <ToastContainer />
              <TapTop />
            </div>
          </> 
        )}
      </ApolloProvider>
    </>
  );
}
