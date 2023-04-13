import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { UserContext } from "../contexts/UserContext";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "react-toastify";

import Layout from "../@common/Layout/Layout";
import { IUser } from "../Interfaces/featuresInterface";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  const [user, setUser] = useState<IUser | null>({} as IUser);
  useEffect(() => {
    window.addEventListener("offline", () => {
      toast.warn("No Internet Connection !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: false,
      });
    });

    window.addEventListener("online", () => {
      toast.dismiss();
    });
  }, []);

  return (
    <QueryClientProvider client={client}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
