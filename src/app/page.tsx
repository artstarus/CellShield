import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import {Check} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:pb-52 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src="/public/noimage.png" alt="logo image" fill className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a <span className="bg-blue-600 px-2 text-white">Custom</span> Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center text-balance lg:text-left md:text-wrap">
                Preserve your cherished memories with a unique, <span className="font-semibold">custom-designed</span> phone case from 'COMPANY NAME'. We help you safeguard your precious moments, not just your phone.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-600"/>
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-600"/>
                    3 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-600"/>
                    Modern iPhone model support
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image src="/users/noavatar.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100" />
                  <Image src="/users/noavatar.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100" />
                  <Image src="/users/noavatar.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100" />
                  <Image src="/users/noavatar.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100" />
                  <Image src="/users/noavatar.png" alt="user image" width={10} height={10} className="inline-block h-10 w-10 rounded-full ring-2 ring-slated-100" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
