import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Sidebar } from "../components/Sidebar";

import "../styles/globals.css";

const queryClient = new QueryClient();

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <QueryClientProvider client={queryClient}>
      <Sidebar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
