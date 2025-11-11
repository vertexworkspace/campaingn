"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const referrer = document.referrer; // previous page URL

    // If user came from same domain
    const currentDomain = window.location.origin;

    if (referrer.startsWith(currentDomain)) {
      const path = referrer.replace(currentDomain, ""); // extract path

      if (path.startsWith("/private-offices")) {
        router.push("/private-offices");
      } else if (path.startsWith("/vertex-solutions")) {
        router.push("/vertex-solutions");
      } else {
        router.push("/vertex-solutions"); // default
      }
    } else {
      // Came directly or from external site
      router.push("/vertex-solutions");
    }
  }, [router]);

  return null;
}
