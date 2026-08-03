"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAction, LoginState } from "../_actions/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";

const initialState: LoginState = {
  success: false,
  statusCode: 0,
  message: "",
  data: {
    accessToken: "",
    refreshToken: "",
  },
};

const LoginFrom = () => {



  const [state, action, pending] = useActionState(loginAction, initialState)

  useEffect(()=>{
     if(!state || !state.message) return
     if(state.message){
       toast.success("Login Successfully")
     }
     if(!state.success){
       toast.error(state.message || "Login Failed")
     }
  })

  return (
    <form action={action} className="space-y-4 w-full max-w-sm">
      <Card className="">
        <CardHeader className="">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">
               <Link href="/signup">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <Button type="submit" className="w-full">
            {pending ? 'Submitting...' : 'Login'}
          </Button>
          
        </CardContent>
      </Card>
    </form>
  );
};

export default LoginFrom;