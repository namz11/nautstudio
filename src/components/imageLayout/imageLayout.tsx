/* eslint-disable @next/next/no-img-element */
import { Routes } from "@models/enums/routes";
import { Picture } from "@models/picture.model";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./imageLayout.module.scss";

export interface ImageLayoutProps {
  pictures?: Picture[];
}

function ImageLayout(props: ImageLayoutProps) {
  const router = useRouter();
  // const { pictures } = props;

  const pictures: Picture[] = [
    {
      key: "1",
      url: "https://source.unsplash.com/e6FMMambeO4",
      title:
        "dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title dummy title",
    },
    {
      key: "2",
      url: "https://source.unsplash.com/klCiPmzUw0Y",
      title: "dummy title",
    },
    {
      key: "3",
      url: "https://source.unsplash.com/DqyYTM7pR2o",
      title: "dummy title",
    },
    {
      key: "4",
      url: "https://source.unsplash.com/O0N9MF--hK4",
      title: "dummy title",
    },
    {
      key: "5",
      url: "https://source.unsplash.com/KTVn62x6fFw",
      title: "dummy title",
    },
    {
      key: "6",
      url: "https://source.unsplash.com/VSeVhmW4_JQ",
      title: "dummy title",
    },
    {
      key: "7",
      url: "https://source.unsplash.com/FV3GConVSss",
      title: "dummy title",
    },
    {
      key: "8",
      url: "https://source.unsplash.com/07aFaTf24Kg",
      title: "dummy title",
    },
    {
      key: "9",
      url: "https://source.unsplash.com/0ESjL-Nw22Y",
      title: "dummy title",
    },
    {
      key: "10",
      url: "https://source.unsplash.com/IdNOTjPeHrE",
      title: "dummy title",
    },
  ];

  const middleIndex = Math.ceil(pictures.length / 2);
  const leftPics = pictures.splice(0, middleIndex);
  const rightPics = pictures.splice(-middleIndex);

  const goToDetails = (key: string) => {
    router.push(`/project/${key}`);
  };

  return (
    <div className={styles.imageGallery}>
      <div className={styles.column}>
        {leftPics &&
          leftPics.length > 0 &&
          leftPics.map((pic: Picture) => (
            <div
              key={pic.key}
              className={styles.imageItem}
              onClick={() => goToDetails(pic.key)}
            >
              <img src={pic.url} alt={pic.title} />
              <div className={styles.title}>
                <span>{pic.title}</span>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.column}>
        {rightPics &&
          rightPics.length > 0 &&
          rightPics.map((pic: Picture) => (
            <div
              key={pic.key}
              className={styles.imageItem}
              onClick={() => goToDetails(pic.key)}
            >
              <img src={pic.url} alt={pic.title} />
              <div className={styles.title}>
                <span>{pic.title}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ImageLayout;
