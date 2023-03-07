import { Inter } from "@next/font/google";
import TeamMember from "./team_member";
import Review from "./review";
const inter = Inter({ subsets: ["latin"] });

export default function Reviews() {
  return (
    <div className="flex justify-center flex-wrap">
      <Review />
      <Review />
      <Review />
    </div>
  );
}
