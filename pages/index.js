import Head from "next/head";
import Image from "next/image";
import ChatbotCard from "../components/chatbot/ChatbotCard";
import AboutSlotIntent from "../components/home/AboutSlotIntent";
import AbutChatbot from "../components/home/AboutChatbot";
import AnalyticsInformation from "../components/home/AnalyticsInformation";
import AnalyticsTopic from "../components/home/AnalyticsTopic";
import Banner from "../components/home/Banner";
import Calltoaction from "../components/home/Calltoaction";
import ChatbotBanner from "../components/home/ChatbotBanner";
import DifferentPlatforms from "../components/home/DifferentPlatforms";
import Footer from "../components/home/Footer";
import HowItworks from "../components/home/HowItworks";
import Settingup from "../components/home/Settingup";
import Header from "../components/ui/Header";
import styles from "../styles/Home.module.css";
import { ChatIcon } from "@heroicons/react/solid";
import { useState } from "react";
import IndustryCard from "../components/home/IndustryCard";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="">
      <Head>
        <title>Home | Proxima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="fixed bottom-0 right-0 hover:animate-pulse">
        <ChatIcon
          className="h-16 bg-white text-gray-500 rounded-full p-2 cursor-pointer "
          onClick={toggle}
        />
      </div>

      {isOpened && (
        <section className="fixed pin bottom-12 right-0 overflow-auto z-50">
          <ChatbotCard />
        </section>
      )}

      <main className="max-w-7xl mx-auto divide-y divide-black">
        <section className="py-6">
          <Banner />
        </section>
        <section className="py-6">
          <AbutChatbot />
        </section>
        <section className="py-6">
          <ChatbotBanner />
        </section>
        <section className="py-6">
          <IndustryCard />
        </section>
        <section className="py-6">
          <AnalyticsTopic />
        </section>
        <section className="py-6">
          <AnalyticsInformation />
        </section>
        <section className="py-6">
          <AboutSlotIntent />
        </section>
        <section className="py-6">
          <Settingup />
        </section>
        <section className="py-6">
          <HowItworks />
        </section>
        <section className="py-6">
          <DifferentPlatforms />
        </section>

        <section className="py-6">
          <Footer />
        </section>
      </main>
    </div>
  );
}
