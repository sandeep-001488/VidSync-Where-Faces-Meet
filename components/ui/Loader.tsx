
import Image from "next/image";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import React from "react";

const Loader = () => {
  const pathName = usePathname();

  return (
    <div className="flex-center h-screen w-full">
      {pathName === "/" ? (
        <Link href="/sign-in">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Go to Sign In
          </button>
        </Link>
      ) : (
        <Image
          src="/icons/loading-circle.svg"
          alt="Loading"
          width={50}
          height={50}
          priority
        />
      )}
    </div>
  );
};

export default Loader;