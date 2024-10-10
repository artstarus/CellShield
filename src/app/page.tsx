import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:pb-52 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute bg-gradient-to-t via-slate-50/50 from-slate-50 inset-x-0 bottom-0 h-12" />
                <img src="/shield_3.png" alt="shield logo image" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a <span className="bg-blue-600 px-2 text-white rounded-xl">Custom</span> Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center text-balance lg:text-left md:text-wrap">
                Preserve your cherished memories with a unique, <span className="font-semibold">custom-designed</span> phone case. <span className="font-semibold">CellShield</span> helps you safeguard your precious moments, not just your phone.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-600" />
                    3 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-600" />
                    Modern iPhone model support
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image src="/users/user1.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100 object-cover" />
                  <Image src="/users/user2.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100 object-cover" />
                  <Image src="/users/user3.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100 object-cover" />
                  <Image src="/users/user4.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100 object-cover" />
                  <Image src="/users/user5.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100 object-cover" />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                    <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
                  </div>
                  <p><span className="font-semibold">1,750+</span> happy customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full justify-center px-8 flex sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" alt="" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" alt="line image" className="absolute w-20 -left-6 -bottom-6 select-none" />
              <Phone className="w-64" imgSrc="/fam.png" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/*value proposition section*/}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our <span className="relative px-2">customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-500" /> </span> have to say
            </h2>
            <img src="/shield_1.png" className="order-0 w-24 lg:order-2" />
          </div>
          <div className="grid mx-auto max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">

            {/*first user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I often carry my phone and keys together in the same pocket, which usually causes a lot of wear and tear on my phone cases. This one, though, has held up remarkably well. Aside from a tiny mark on the edge, <span className="p-0.5 bg-slate-800 text-white">it still looks pristine after six months.</span> I'm genuinely impressed!"
                </p>
              </div>
              <div className="flex mt-2 gap-4">
                <img src="/users/user2.png" alt="user image" className="rounded-full w-12 h-12 object-cover" />
                <div className="flex flex-col">
                  <p className="font-semibold">Ava</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="w-4 h-4 stroke-[3px] text-blue-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/*second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I’ve tried several phone cases, but this one stands out. It offers excellent grip and feels really durable without being bulky. <span className="p-0.5 bg-slate-800 text-white">The design is sleek and complements my phone perfectly.</span> It still looks as sharp as the day I bought it. Even after
                  several months of daily use, I'm really satisfied with it."
                </p>
              </div>
              <div className="flex mt-2 gap-4">
                <img src="/users/user4.png" alt="user image" className="rounded-full w-12 h-12 object-cover" />
                <div className="flex flex-col">
                  <p className="font-semibold">Daniel</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="w-4 h-4 stroke-[3px] text-blue-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload a photo and create <span className="rounded-xl relative px-2 text-white bg-blue-600"> your own</span> <span className="rounded-xl relative px-2 text-white bg-blue-600"> personalized</span> case
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img src="/arrow.png" alt="arrow image" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/fish.png" alt="user image" className="object-cover rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 w-full h-full" />
              </div>
              <Phone className="w-60" imgSrc="/fish.png" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="w-5 h-5 text-blue-600 inline mr-1.5" />
              High-quality Thermoplastic Elastomer slipcover
            </li>
            <li className="w-fit">
              <Check className="w-5 h-5 text-blue-600 inline mr-1.5" />
              MagSafe compatible charging
            </li>
            <li className="w-fit">
              <Check className="w-5 h-5 text-blue-600 inline mr-1.5" />
              DROP+ | 3X as many drops as military standard
            </li>
            <li className="w-fit">
              <Check className="w-5 h-5 text-blue-600 inline mr-1.5" />
              Made with more than 35% recycled plastic
            </li>
            <li className="w-fit">
              <Check className="w-5 h-5 text-blue-600 inline mr-1.5" />
              5 year print warranty
            </li>
            <div className="flex justify-center">
              <Link href="/configure/upload" className={buttonVariants({ size: "lg", className: "mx-auto mt-8" })}> Customize your case now <ArrowRight className="w-4 h-4 ml-1.5" /> </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>

    </div>
  );
}
