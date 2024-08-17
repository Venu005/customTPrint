import Image from "next/image";
import { monaSans } from "@/fonts/monaSans";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import rightSvg from "../../public/right.svg";
import { Star, Check } from "lucide-react";
import heroImg from "../../public/hero.svg";
import Link from "next/link";
import { Slider } from "@/components/Slider";
import Shirt from "@/components/Shirt";
export default function Home() {
  return (
    <main className={`${monaSans.className} overflow-hidden relative `}>
      <section className="bg-[#A1E870] text-hero lg:grid overflow-hidden">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1
              style={{ fontWeight: 800 }}
              className="mb-4 max-w-2xl text-5xl font-extrabold leading-none md:text-5xl lg:text-7xl"
            >
              DESIGN <br />
              YOUR T-SHIRTS
            </h1>
            <p
              className="mb-6 max-w-2xl  lg:mb-8 md:text-lg lg:text-xl font-semibold pl-2"
              style={{ fontWeight: 700 }}
            >
              Unleash your creativity with personalized t-shirts. Add your
              favorite photo and make it uniquely yours.
            </p>
            <Link href="/configure/upload" className="sm:-ml-2 md:-ml-4 mt-4 ">
              <Button
                variant={"link"}
                className="font-bold text-hero gap-1 text-base underline"
              >
                Start Designing
                <Image src={rightSvg} alt="right-arrow" />
              </Button>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center -mb-20">
            <Image src={heroImg} alt="hero" layout="intrinsic" />
          </div>
        </div>
      </section>
      <section className="relative z-20 pt-20 bg-[#DFFAD7]">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2
              style={{ fontWeight: 900 }}
              className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-3xl md:text-4xl text-hero"
            >
              WHAT OUR CUSTOMERS SAY?
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I had a fantastic experience with Shirt Studio! The
                  customization process was easy, offering a wide range of
                  colors and the ability to upload photos.
                  <br />
                  <span className="p-0.5 bg-slate-800 text-white">
                    The print quality is superb,{" "}
                  </span>
                  with vibrant colors and sharp images. The t-shirt is
                  comfortable and well-made. Highly recommend for anyone looking
                  to create personalized, high-quality apparel!
                  {/* <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span> */}
                  &quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-medium">Karthik Reddy</p>
                  <div className="flex gap-1.5 items-center text-hero">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Shirt Studio exceeded my expectations! The customization
                  tool was intuitive, allowing me to choose colors and upload
                  photos effortlessly. The print quality is exceptional, with
                  vivid colors and clear images.
                  <span className="p-0.5 bg-slate-800 text-white">
                    The t-shirt itself is comfortable and durable.
                  </span>
                  <br /> Highly recommend for top-notch personalized
                  t-shirts!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/meghana.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-medium">Meghana</p>
                  <div className="flex gap-1.5 items-center text-hero">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Slider />
        </div>
      </section>
      <section className="grainy-light -ml-2">
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-hero">
                UPLOAD YOUR PHOTO AND GET{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  YOUR T-SHIRT
                </span>{" "}
                NOW
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[14rem] sm:top-[20rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative md:h-80 h-40 sm:h-60 md:justify-self-end max-w-sm rounded-xl lg:rounded-2xl">
                <img
                  src="/hehe.png"
                  className="rounded-md object-cover h-full w-full"
                />
              </div>

              <img
                src="/hehe_tshirt.png"
                className="rounded-md object-cover h-full w-full"
              />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Wide Range of Colors
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Photo Upload
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              High-Quality Prints
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              User-Friendly Customization Tool
            </li>

            <div className="flex justify-center pt-10">
              <Link
                href="/configure/upload"
                style={{ fontWeight: 800 }}
                className={buttonVariants({
                  size: "sm",
                  className: " sm:flex items-center gap-1 text-2xl",
                  variant: "link",
                })}
              >
                START DESIGNING
                <Image src={rightSvg} alt="right-arrow" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
