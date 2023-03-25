import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getLocalData } from "../lib/localdata";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";

export type ExploreDataItem = {
  img: string;
  location: string;
  distance: string;
};

const inter = Inter({ subsets: ["latin"] });
const fetcher = (url: URL) => fetch(url).then((res) => res.json());

export default function Home({
  exploreData,
}: {
  exploreData: ExploreDataItem[];
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
            {exploreData.map((item) => {
              return (
                <SmallCard
                  key={item.location}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
// next.js fn for server rendering
export async function getStaticProps() {
  const exploreData: string = await getLocalData("exploreData");
  return {
    props: {
      exploreData,
    },
  };
}
