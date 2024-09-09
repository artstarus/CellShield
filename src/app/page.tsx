import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:pb-52 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32">
          <div></div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
