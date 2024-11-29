import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="text-center  ">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          This page could not be found.
        </h2>

        <div className="flex justify-center ">
          <Link
            href={"/"}
            className="flex items-center justify-center px-4 py-3 bg-primary text-sm text-white rounded-md hover:bg-primary/80 transition-colors "
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
