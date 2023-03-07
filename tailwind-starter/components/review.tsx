import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Review() {
  return (
    <div className="flex flex-col shadow-xl bg-gray-200 w-96 p-8 rounded-xl mt-20 mx-auto">
      <img
        className="h-10 w-10 mb-12"
        src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg"
        alt="quotes icon"
      ></img>
      <p className="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        laboriosam quasi expedita similique facilis numquam, laborum unde iure
        corrupti illo saepe optio provident incidunt animi id quae blanditiis
        nostrum a.
      </p>
      <p className="font-bold text-2xl">Full Name</p>
    </div>
  );
}
