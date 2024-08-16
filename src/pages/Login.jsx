import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <div className="bg-white rounded-xl w-1/3 p-6">
        <div className="flex justify-between items-center">
          <img src="/images/Logo-CE-Blue.svg" alt="" />
          <Link to={"/"} className="flex items-center gap-2">
            <img src="/images/ArrowLeft.svg" alt="" />
            <h1 className="font-bold text-xl text-[#0A3E6D]">Back</h1>
          </Link>
        </div>
        <div className="my-8">
          <form action="" className="flex flex-col gap-3">
            <div>
              <Label>Username</Label>
              <Input type="text" className="my-2" placeholder="Username" />
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="my-3"
                  placeholder="Password"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6 text-gray-500" />
                  ) : (
                    <Eye className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            <Button className="w-full rounded-md mt-3">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
