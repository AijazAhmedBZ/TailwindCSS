import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Subscribe() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-9/12">
        <input
          type="email"
          className="flex flex-grow border-solid border-2 border-black rounded-md"
          placeholder="Email Address"
        ></input>
        <button
          type="submit"
          className="bg-blue-500 text-gray-200 px-6 py-4 rounded-md"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
