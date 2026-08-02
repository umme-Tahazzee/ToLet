// app/page.tsx

import {
  Home as HomeIcon,
  MessageSquareText,
} from "lucide-react";
import { getMe } from "@/services/getMe";
import Hero from "./_components/home/Hero";


export default async function Home() {
  const user = await getMe();
  const isLoggedIn = user?.success;

  return (
    <div className="bg-background">

      <Hero/>
     
    
    </div>
  );
}