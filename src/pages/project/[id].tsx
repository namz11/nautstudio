import Carousel from "@components/carousel/carousel";
import Navbar from "@components/navbar/navbar";
import ProjectText from "@components/projectText/projectText";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ProjectDetails() {
  const router = useRouter();
  const id = router.query.id || "";

  const [selected, setSelected] = useState("images");

  return (
    <div>
      <Navbar selectedRoute="/works" />
      <main className="content">
        <section className="fullscreen">
          <div className="project-nav">
            <div className="title">Project Dummy Title</div>
            <div
              className={
                selected === "images" ? "nav-item-selected" : "nav-item"
              }
              onClick={() => setSelected("images")}
            >
              Images
            </div>
            <div
              className={selected === "text" ? "nav-item-selected" : "nav-item"}
              onClick={() => setSelected("text")}
            >
              Text
            </div>
          </div>
          {selected === "images" && <Carousel />}
          {selected === "text" && <ProjectText />}
        </section>
        <section className="mobile" />
      </main>
    </div>
  );
}
