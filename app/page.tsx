"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    let navigated = false;

    // Try going back first
    router.back();

    // After a short delay, if still on the same page, redirect
    const timeout = setTimeout(() => {
      if (!navigated) {
        router.replace("/coworking-space");
      }
    }, 300);

    // Clean up
    return () => clearTimeout(timeout);
  }, [router]);

  return null;
}
