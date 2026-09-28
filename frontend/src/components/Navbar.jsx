import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          E-Comm
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Products
          </Link>
        </div>

        {/* Authentication Button */}
        <div>
          <Link
            to="/auth/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login / Signup
          </Link>

          {/* After login, replace the above Link with this button */}

          {/*
          <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
          */}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;