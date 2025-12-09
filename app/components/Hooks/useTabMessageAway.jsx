"use client";

import { useEffect, useRef } from "react";

export function useTabMessageAway(message = "👀 I'm waiting for you...") {
  const originalTitle = useRef("");

  useEffect(() => {
    if (typeof document === "undefined") return;

    originalTitle.current = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle.current = document.title;
        document.title = message;
      } else {
        document.title = originalTitle.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [message]);
}
