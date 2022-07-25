import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Works() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/works/selected`);
  }, []);

  return null;
}
