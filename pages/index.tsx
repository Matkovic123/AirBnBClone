import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getLocalData } from "../lib/localdata";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCardComponent from "@/components/MediumCardComponent";

export type ExploreDataItem = {
  img: string;
  location: string;
  distance: string;
};

export type CardDataItem = {
  img: string;
  title: string;
};

export default function Home({
  exploreData,
  cardsData,
}: {
  exploreData: ExploreDataItem[];
  cardsData: CardDataItem[];
}) {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard
                key={item.location}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll p-3 -ml-3
          scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          ">
            {cardsData.map(({ img, title }) => (
              <MediumCardComponent key={title} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
// next.js fn for server rendering
export async function getStaticProps() {
  const exploreData: string = await getLocalData("exploreData");
  const cardsData: string = await getLocalData("cardsData");
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
