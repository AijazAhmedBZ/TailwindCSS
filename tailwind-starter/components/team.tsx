import { Inter } from "@next/font/google";
import TeamMember from "./team_member";
const inter = Inter({ subsets: ["latin"] });

export default function Team() {
  return (
    <div className="flex justify-center flex-wrap">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
}
