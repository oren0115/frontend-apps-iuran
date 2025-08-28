import Footer from "@/components/common/footer/footer.user";
import { Header } from "@/components/common/header/header";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="flex flex-col max-w-md mx-auto">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default UserLayout;
