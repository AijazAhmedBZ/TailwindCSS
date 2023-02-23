import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 order-last self-center">
          <Image src="/panaverse.png" width={80} height={80} alt="Logo" />
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700">
            Welcome to Panaverse
          </h1>
          <h2 className="text-3xl font-semibold text-blue-300">
            A Community of Web 3.0 and Metaverse Developers
          </h2>
          <button className="mr-10 my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            <Link href="/hello_world">Hello World</Link>
          </button>
          <button className="mr-10 my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            <Link href="/gradients">Gradients</Link>
          </button>
          <button className="mr-10 my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            <Link href="/ring">Ring</Link>
          </button>
          <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            <Link href="/shadows">Shadows</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
