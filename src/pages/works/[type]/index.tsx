import ImageLayout from "@components/imageLayout/imageLayout";
import Navbar from "@components/navbar/navbar";
import { useRouter } from "next/router";
import React from "react";

export default function WorksType() {
  const router = useRouter();
  const type = router.query.type || "";

  return (
    <div>
      <Navbar selectedRoute={`/works/${type}`} />
      <main className="content">
        <ImageLayout />
      </main>
    </div>
  );
}
