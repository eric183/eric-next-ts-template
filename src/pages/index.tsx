import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import Header from "~/components/header";
import MainContainer from "~/components/container";
import { MiddleContent } from "~/components/content";
import { useQuery } from "@tanstack/react-query";
const HomeLayout = styled.div`
  section {
    width: 50%;
    height: 100%;
  }
`;

export default function Home() {
  // useQuery("https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list");
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  return (
    <HomeLayout className="w-[100vw] h-[100vh] flex flex-col">
      <Header />
      <MainContainer />
    </HomeLayout>
  );
}
