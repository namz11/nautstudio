/* eslint-disable @next/next/no-img-element */
import { Routes } from "@models/enums/routes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import styles from "./carousel.module.scss";

function Carousel(props: any) {
  return (
    <Swiper
      modules={[Keyboard, Pagination, Navigation]}
      pagination={{
        type: "fraction",
      }}
      keyboard={{
        enabled: true,
      }}
      loop
      navigation
      className={styles.mySwiper}
    >
      <SwiperSlide>
        <img src="/1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/4.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/5.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/6.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
