import Footer from "@/components/common/footer/footer.user";

import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="flex flex-col max-w-md mx-auto">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default UserLayout;
