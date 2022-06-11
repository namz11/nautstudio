import Navbar from "@components/navbar/navbar";
import React from "react";

export default function Person() {
  return (
    <div>
      <Navbar selectedRoute="/studio/people/namit" />
      <main className="content">
        <div>person screen</div>
        <div>person screen</div>
        <div>person screen</div>
        <div>person screen</div>
      </main>
    </div>
  );
}
