import Navbar from "@components/navbar/navbar";
import { useRouter } from "next/router";
import React from "react";

export default function WorksTypeCategory() {
  const router = useRouter();
  const type = router.query.type || "";
  const category = router.query.category || "";

  return (
    <div>
      <Navbar selectedRoute={`/works/${type}/${category}`} />
      <main className="content">
        <div>works-type-category screen</div>
        <div>works-type-category screen</div>
        <div>works-type-category screen</div>
        <div>works-type-category screen</div>
        <div>works-type-category screen</div>
        <div>works-type-category screen</div>
      </main>
    </div>
  );
}
