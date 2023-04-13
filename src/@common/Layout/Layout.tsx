import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ToastContainer />
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
