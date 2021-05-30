import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[55vh] lg:h-[80vh] 2xl:h-[90vh]">
      <Image
        src="/images/kingdom-principles.jpg"
        className="absolute top-0 left-0 z-10 w-full h-full "
        alt=""
        layout="fill"
      />
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50" />
      <div className="absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-full text-center text-gray-50 border-b border-solid border-[#1DBFBF]">
        <h1 className="mb-2 text-lg font-bold capitalize 2xl:mb-8 md:text-2xl 2xl:text-4xl">
          To God all the glory
        </h1>
        <p className="text-sm md:w-2/3 md:text-lg 2xl:w-1/2 2xl:text-xl">
          Kingodm Principles is a christian podcast serving and guiding people
          into seeking for, and adhering to Kingdom principles which guarantee
          succesful lives on earth and thereafter.
        </p>
      </div>
      <div className="absolute bottom-0 right-0 z-50 w-full h-20 path bg-[#1DBFBF]" />
    </section>
  );
}
