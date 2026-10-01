"use client";

import { Lottie } from "lottie-react";

export default function NotFoundAnimation() {
  return (
   <div className="w-105 md:w-130 lg:w-150 flex items-center">
      <Lottie
        src="/animations/404-error-1.json"
        autoplay
        loop
      />
    </div>
  );
}