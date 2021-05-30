import Link from "next/link";

export default function Header() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent text-gray-50">
      <div className="w-10/12 py-8 mx-auto">
        <Link href="/">
          <a>
            <h1 className="text-lg font-bold uppercase lg:text-xl 2xl:text-2xl">
              Kingdom Principles
            </h1>
          </a>
        </Link>
      </div>
    </nav>
  );
}
