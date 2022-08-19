import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChatApp</title>
        <meta name="description" content="ChatApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
    </>
  );
};

export default Home;
