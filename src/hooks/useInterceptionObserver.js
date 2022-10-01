import { useEffect } from "react";

export const useIntersectionObserver = (ref, callback) => {
  return useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
    });
  }, [ref]);
};
