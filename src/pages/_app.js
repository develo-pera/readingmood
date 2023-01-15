import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/main.scss";

export default function ReadingmoodApp({ Component, pageProps }) {
  return (
    <>
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
