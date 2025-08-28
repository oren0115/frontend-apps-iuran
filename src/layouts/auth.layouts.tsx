import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="w-full h-auto flex flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
