/* eslint-disable @next/next/no-img-element */
import Navbar from "@components/navbar/navbar";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar selectedRoute="/" />
      <main className="content">
        <div className="hero-image">
          <img src="/1.jpg" alt="naut banner" />
        </div>
      </main>
    </div>
  );
}
