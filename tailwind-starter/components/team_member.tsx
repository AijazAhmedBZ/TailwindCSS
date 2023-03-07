import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TeamMember() {
  return (
    <div className="flex m-12 items-center">
      <img
        src="https://via.placeholder.com/150"
        alt="user avater"
        className="rounded-full shadow-xl"
      />
      <div className="ml-6">
        <p className="text-2xl font-bold">Full Name</p>
        <p className="text-lg">Title</p>
      </div>
    </div>
  );
}
