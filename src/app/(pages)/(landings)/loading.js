import loader from "@/assets/icons/loader.json";
import { Lottie } from "@/Components/shared/ClientImport";

export default function Loading() {
  return (
    <div className="preloader">
      <div className="h-full d-flex justify-content-center align-items-center">
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
}
