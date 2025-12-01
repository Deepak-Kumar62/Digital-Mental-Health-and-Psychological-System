import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AdvancedHeader() {
  const user = true; // replace with your context later
  const logout = () => {
    alert("Logout clicked");
  };

  const pages = [
    { name: "Home", path: "/" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Counselling", path: "/counselling" },
    { name: "Resources", path: "/resources" },
    { name: "Assessment", path: "/assessment" },
    { name: "Mood Tracker", path: "/mood" },
    { name: "Forum", path: "/forum" },
    { name: "Activities", path: "/activities" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 tracking-wide"
        >
          MindSpark
        </Link>

        {/* NAV (Desktop) */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          {pages.map((p) => (
            <NavLink
              key={p.name}
              to={p.path}
              className={({ isActive }) =>
                `transition pb-1 relative ${isActive
                  ? "text-blue-600 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {p.name}
            </NavLink>
          ))}

          {!user ? (
            <div>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          ) : (<DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full cursor-pointer border"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Link to="/profile" className="flex gap-2 items-center">
                  <User size={16} /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <div className="flex gap-2 items-center text-red-500 cursor-pointer">
                  <LogOut size={16} /> Logout
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>)}

          {/* PROFILE MENU */}
        </nav>

        {/* BEFORE LOGIN */}


        {/* MOBILE MENU BUTTON */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={26} />
          </SheetTrigger>

          <SheetContent side="right" className="w-72 p-6">
            <div className="flex flex-col gap-6 mt-8">

              {/* LOGO */}
              <Link to="/" className="text-2xl font-bold text-blue-600">
                MindSpark
              </Link>

              {/* Mobile links */}
              {user &&
                pages.map((p) => (
                  <NavLink
                    key={p.name}
                    to={p.path}
                    className={({ isActive }) =>
                      `text-lg border-b py-2 transition ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                      }`
                    }
                  >
                    {p.name}
                  </NavLink>
                ))}

              {/* Mobile Profile */}
              {user && (
                <>
                  <Link
                    to="/profile"
                    className="flex gap-2 items-center text-lg border-b py-2"
                  >
                    <User size={18} /> Profile
                  </Link>

                  <button
                    onClick={logout}
                    className="flex gap-2 items-center text-red-500 text-lg"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </>
              )}

              {/* BEFORE LOGIN MOBILE */}
              {!user && (
                <>
                  <Link to="/signup">
                    <Button className="w-full text-lg">Sign Up</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" className="w-full text-lg">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}








// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

// const Header = () => {
//   const user = {}; // change to your auth context
//   const logout = () => {};

//   const beforeLoginMenu = (
//     <>
//       <Link to="/" className="hover:text-blue-600">Home</Link>
//       <Link to="/signup">
//         <Button className="bg-blue-600 text-white px-4">Sign Up</Button>
//       </Link>
//     </>
//   );

//   const afterLoginMenu = (
//     <>
//       <Link to="/" className="hover:text-blue-600">Home</Link>
//       <Link to="/chatbot" className="hover:text-blue-600">Chatbot</Link>
//       <Link to="/counselling" className="hover:text-blue-600">Counselling</Link>
//       <Link to="/resources" className="hover:text-blue-600">Resources</Link>
//       <Link to="/forum" className="hover:text-blue-600">Forum</Link>
//       <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
//       <Link to="/activities" className="hover:text-blue-600">Activities</Link>

//       {/* Profile */}
//       <Link to="/profile">
//         <Avatar className="w-8 h-8">
//           <AvatarImage src="/profile-icon.png" />
//         </Avatar>
//       </Link>

//       <Button onClick={logout} variant="destructive" className="px-3">
//         Logout
//       </Button>
//     </>
//   );

//   return (
//     <nav className="sticky top-0 z-50 shadow-sm px-6 md:px-20 py-3 flex justify-between items-center bg-white">
//       {/* LOGO */}
//       <div className="flex items-center gap-2">
//         <h1 className="font-bold text-2xl">MindSpark</h1>
//       </div>

//       {/* DESKTOP MENU */}
//       <div className="hidden md:flex gap-6 text-gray-700 items-center">
//         {!user ? beforeLoginMenu : afterLoginMenu}
//       </div>

//       {/* MOBILE MENU (Hamburger) */}
//       <div className="md:hidden">
//         <Sheet>
//           <SheetTrigger>
//             <Menu className="w-7 h-7" />
//           </SheetTrigger>

//           <SheetContent side="right" className="w-64">
//             <div className="flex flex-col gap-4 mt-6 text-gray-700 font-medium">
//               {!user ? beforeLoginMenu : afterLoginMenu}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// };

// export default Header;
