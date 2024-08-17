import Link from "next/link";
import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants, Button } from "./ui/button";
import { monaSans } from "@/fonts/monaSans";
import rightSvg from "../../public/right.svg";
const NavBar = () => {
  const user = true;
  const isAdmin = true;
  return (
    <nav
      style={{ fontWeight: 800 }}
      className={`${monaSans.className} sticky z-[100] h-14 inset-x-0 top-0 w-full bg-[#A1E870]  backdrop-blur-lg transition-all text-hero `}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40">
            Shirt<span className="text-hero">Studio</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  style={{ fontWeight: 800 }}
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                {/* <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link> */}
                <Link
                  style={{ fontWeight: 800 }}
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Start Designing
                  <Image src={rightSvg} alt="right-arrow" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Start Designing
                  <Image src={rightSvg} alt="right-arrow" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
