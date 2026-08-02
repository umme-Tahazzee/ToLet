import { Button } from "@/components/ui/button";
import { getMe } from "@/services/getMe";

export default function Home() {
  const user = getMe()
  console.log(user, "user");
  
  return (
    <div>
      <h1>Karia</h1>
      <Button variant="default" > Click it</Button>      
    </div>
  );
}
