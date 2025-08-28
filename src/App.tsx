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
import { PaymentPage } from "./pages/client/payment/payment.page";
import ResetPassword from "@/components/auth/reset.password/reset.password";

// auth
import AuthLayout from "./layouts/auth.layouts";
import NotificationPage from "./pages/client/notifications/notification.page";

// common

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route path="/auth" element={<AuthLayout />}>
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
          <Route
            path="reset-password"
            element={
              <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
                <ResetPassword />
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
          <Route path="history" element={<HistoryPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="notification" element={<NotificationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
