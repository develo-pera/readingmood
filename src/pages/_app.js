import Script from "next/script";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/main.scss";

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
