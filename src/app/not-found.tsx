import Link from "next/link";
import NotFoundAnimation from "@/components/shared/NotFoundAnimation";

const NotFound = () => {
  return (
     <div className="flex min-h-full flex-col items-center justify-center text-center">
        <NotFoundAnimation />
        <Link
          href="/fit-logs"
          className="button-shrink mt-6 rounded-xl bg-[#c3f801] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff3d]"
        >
          Back to Workouts
        </Link>

      </div>
  );
};

export default NotFound;