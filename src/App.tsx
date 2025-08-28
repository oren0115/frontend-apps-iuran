import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "@/pages/auth/register/register.page";
import LoginPage from "@/pages/auth/login/login.page";
import "@/css/index.css";
import AdminLayout from "./layouts/admin.layouts";
import AdminDashboard from "@/pages/admin/dashboard/dashboard.page";

// user
import UserLayout from "./layouts/user.layout";
import HomePage from "./pages/client/home/home.page";
import HistoryPage from "./pages/client/history/history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route path="/auth">
          <Route
            path="register"
            element={
              <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
                <RegisterPage />
              </div>
            }
          />
          <Route
            path="login"
            element={
              <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
                <LoginPage />
              </div>
            }
          />
        </Route>

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* User Pages */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />{" "}
          {/* 🔥 Tanpa '/' */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
