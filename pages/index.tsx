import { NextPage } from "next";
import Head from "next/head";

import Home from "../pages/Home";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A sample Next.js app" />
      </Head>
      <Home />
    </>
  );
};

export default Index;
