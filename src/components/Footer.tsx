import * as React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#A1E870] h-16 relative text-hero">
      <MaxWidthWrapper>
        {/* <div className="border-t border-gray-200" /> */}

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="font-light">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link href="https://github.com/Venu005" className="font-light">
                CRAFTED WITH LOVE BY VENU
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
