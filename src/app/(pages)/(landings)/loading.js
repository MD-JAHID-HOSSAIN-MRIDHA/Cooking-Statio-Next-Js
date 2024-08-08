"use client";
import loader from "@/assets/icons/loader.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Loading() {
  return (
    <div className="preloader">
      <div className="h-full d-flex justify-content-center align-items-center">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
}
