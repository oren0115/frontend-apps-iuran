import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";

function ResetPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription>
            Enter your email to receive a password reset link.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>

            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <a
                href="/auth/login"
                className="hover:underline text-blue-600 font-medium">
                Back to Login
              </a>
              <a
                href="/auth/register"
                className="hover:underline text-blue-600 font-medium">
                Create Account
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default ResetPassword;
