import Navbar from "@components/navbar/navbar";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar selectedRoute="/" />
      <main className="content">
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
      </main>
    </div>
  );
}
