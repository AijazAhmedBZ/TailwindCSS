import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import HamzaButton from "./hamza_button";
import AdilButton from "@/components/adil_button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 order-last self-center hover:scale-125">
          <Image src="/panaverse.png" width={80} height={80} alt="Logo" />
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700 hover:scale-125 hover:text-red-900">
            Welcome to Panaverse
          </h1>
          <h2 className="text-3xl font-semibold text-blue-300 hover:scale-125 hover:text-red-900">
            A Community of Web 3.0 and Metaverse Developers
          </h2>
          <HamzaButton>
            <Link href="/hello_world">Hello World</Link>
          </HamzaButton>
          <HamzaButton>
            <Link href="/gradients">Gradients</Link>
          </HamzaButton>
          <HamzaButton>
            <Link href="/ring">Ring</Link>
          </HamzaButton>
          <HamzaButton>
            <Link href="/shadows">Shadows</Link>
          </HamzaButton>
        </div>
      </div>
      <div>
        <AdilButton />
      </div>
    </div>
  );
}
