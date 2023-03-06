import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TeamMember() {
  return (
    <div className="m-12">
      <img
        src="https://via.placeholder.com/150"
        alt="user avater"
        className="rounded-full"
      />
      <p>Full Name</p>
    </div>
  );
}
