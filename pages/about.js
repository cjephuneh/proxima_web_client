/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import AboutCard from "../components/about/AboutCard";
import ContactCard from "../components/about/ContactCard";
import Footer from "../components/home/Footer";
import Header from "../components/ui/Header";
import { ChatIcon } from "@heroicons/react/solid";
import ChatbotCard from "../components/chatbot/ChatbotCard";

function about() {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  return (
    <div>
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
          <AboutCard />
        </section>
        <section className="py-6">
          <ContactCard />
        </section>
        <section className="py-6">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default about;
