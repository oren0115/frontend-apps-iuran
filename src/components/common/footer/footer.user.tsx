import { FaHome } from "react-icons/fa";
import { MdOutlinePayment, MdLogin, MdLogout, MdHistory } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom"; // Karena pakai Vite (bukan Next.js)

export default function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md max-w-md mx-auto">
      <ul className="flex justify-around items-center py-2">
        <li>
          <Link
            to="/"
            className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <FaHome className="text-3xl" />
            {/* <span className="text-xs">Home</span> */}
          </Link>
        </li>

        <li>
          <Link
            to="/payment"
            className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <MdOutlinePayment className="text-3xl" />
            {/* <span className="text-xs">Payment</span> */}
          </Link>
        </li>

        <li>
          <Link
            to="/history"
            className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <MdHistory className="text-3xl" />
            {/* <span className="text-xs">History</span> */}
          </Link>
        </li>

        {!isLoggedIn ? (
          <li>
            <Link
              to="/auth/login"
              className="flex flex-col items-center text-gray-700 hover:text-gray-900">
              <MdLogin className="text-3xl" />
              {/* <span className="text-xs">Login</span> */}
            </Link>
          </li>
        ) : (
          <li>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex flex-col items-center text-gray-700 hover:text-red-600">
              <MdLogout className="text-3xl" />
              {/* <span className="text-xs">Logout</span> */}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
