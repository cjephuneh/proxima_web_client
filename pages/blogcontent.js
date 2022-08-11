import React, { useState } from "react";
import Footer from "../components/home/Footer";
import BlogsCard from "../components/Blogs/LearnMoreCard";
import Header from "../components/ui/Header";
import Head from "next/head";
import BlogHeader from "../components/Blog/BlogHeader";
import BlogBody from "../components/Blog/BlogBody";
import BlogFooter from "../components/Blog/BlogFooter";

function BlogContent() {

  
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Blog | Proxima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
     
      <main className="mx-auto divide-y divide-black">
        <section>
            <div>
                <BlogHeader />
            </div>
            <div>
                <BlogBody />
            </div>
            <div>
                <BlogFooter />
            </div>
        </section>
        <section className="py-6">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default BlogContent;
