import "@/styles/globals.css";
import { Approvider } from "../contex.jsx";

export default function App({ Component, pageProps }) {
  return (
    <Approvider>
      <Component {...pageProps} />
    </Approvider>
  );
}
