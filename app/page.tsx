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

      if (path.startsWith("/work-space")) {
        router.push("/work-space");
      } else if (path.startsWith("/coworking-space")) {
        router.push("/coworking-space");
      } else {
        router.push("/coworking-space"); // default
      }
    } else {
      // Came directly or from external site
      router.push("/coworking-space");
    }
  }, [router]);

  return null;
}
