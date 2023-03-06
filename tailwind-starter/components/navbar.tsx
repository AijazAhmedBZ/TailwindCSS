import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="flex bg-gray-800 text-gray-300 text-2xl justify-end flex-wrap">
      <div className="px-2 mx-4 my-6 hover:font-bold">
        <b>H</b>ome
      </div>
      <div className="px-2 mx-4 my-6 hover:font-bold">
        <b>A</b>bout
      </div>
      <div className="px-2 mx-4 my-6 hover:font-bold">
        <b>C</b>ontact
      </div>
    </div>
  );
}
