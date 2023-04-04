import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>6070: Gryphon Machine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/6070-logo.png" />
      </Head>
      <Navbar />
      <div
        className={`px-7 mt-20 py-[50px] rounded-lg flex flex-col md:flex-row items-center justify-center mb-5`}
      >
        coming soooooooooon
      </div>
      <Footer />
    </>
  );
}
