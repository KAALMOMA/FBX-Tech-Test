'use client';

import { useEffect } from 'react';

export default function CubesBgInit() {
  useEffect(() => {
    const tryInit = () => {
      if (window.Color4Bg && window.Color4Bg.RandomCubesBg) {
        new window.Color4Bg.RandomCubesBg({
          dom: "box",
          colors: ["#dedede", "#d4d4d4", "#e8e8e8", "#ebebeb"],
          loop: true,
        });
      } else {
        setTimeout(tryInit, 100);
      }
    };
    tryInit();
  }, []);
  return null;
} 