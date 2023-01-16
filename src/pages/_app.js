import Script from "next/script";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/main.scss";

if (typeof window !== "undefined") {
  LogRocket.init('w7yj3j/readingmood');
  // plugins should also only be initialized when in the browser
  setupLogRocketReact(LogRocket);
}

export default function ReadingmoodApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NHZJYG55N2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}  
            gtag('js', new Date());
            gtag('config', 'G-NHZJYG55N2');
          `}
      </Script>
      <Component {...pageProps} />
      <ToastContainer
        className="ReadingmoodNotification"
        position="bottom-center"
        icon={false}
        limit={1}
      />
    </>
  )
}
