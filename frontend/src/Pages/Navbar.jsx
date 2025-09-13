import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { MenuIcon, Search, XIcon } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#FFFAE9] ">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">

        <div className="flex gap-4 items-center">
          <Link to="/" className="flex-shrink-0">
            <div>
              <img src="Logo.png" className="h-10 sm:h-12 w-auto" alt="Logo" />
            </div>
          </Link>
          <div className="hidden lg:flex gap-6 items-center">
            <div className="relative group">
              <div className="text-left font-semibold text-base lg:text-[18px] text-[#6C2D38] cursor-pointer">
                Products
              </div>
              <div className="absolute hidden group-hover:block bg-[#FFFAE9] shadow-lg rounded w-56 z-10">
                <ul className="flex flex-col gap-2 p-2">
                  <li>
                    <Link
                      to="/mushrooms"
                      className="block px-4 py-2 hover:bg-gray-100 text-[#6C2D38] font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mushrooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/exotics"
                      className="block px-4 py-2 hover:bg-gray-100 text-[#6C2D38] font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Exotics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/microgreens"
                      className="block px-4 py-2 hover:bg-gray-200 text-[#6C2D38] font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Microgreens
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="font-semibold text-base lg:text-[18px] text-[#6C2D38] cursor-pointer">
                Services
              </div>
              <div className="absolute hidden group-hover:block bg-[#FFFAE9] shadow-lg rounded w-56 z-10">
                <ul className="flex flex-col gap-2 p-2">
                  <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 w-xl py-2 hover:bg-gray-100 text-[#6C2D38] font-semibold">
                      End-to-End Farm Setup
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="font-semibold text-base lg:text-[18px] text-[#6C2D38] cursor-pointer">
                Training
              </div>
              <div className="absolute hidden group-hover:block bg-[#FFFAE9] shadow-lg rounded w-56 z-10">
                <ul className="flex flex-col gap-2 p-2">
                  <Link to="/training" onClick={() => setIsMenuOpen(false)}>
                    <li className="px-4 py-2 hover:bg-gray-100 text-[#6C2D38] font-semibold">
                      Hands-on Skill Lab
                    </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-100 text-[#6C2D38] font-semibold">
                    Expert Guidance-+916291932784
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>
                <div className="font-semibold text-base lg:text-[18px] text-[#6C2D38]">
                  Blogs
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-4 items-center font-semibold text-base lg:text-[18px]">
            <Link to="/contact-us" className="text-[#6C2D38]">
              Contact Us
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#FFFAE9] shadow-lg rounded z-50">
              <DropdownMenuGroup>
                <Link to="/login">
                  <DropdownMenuItem className="mt-2 mr-6 bg-[#6C2D38] text-white rounded ">
                  Dashboard
                </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FFFAE9] shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">

              <div className="border-b border-gray-200 pb-3">
                <div className="font-semibold text-[#6C2D38] text-lg mb-2">
                  Products
                </div>
                <div className="pl-4 flex flex-col gap-2">
                  <Link 
                    to="/mushrooms" 
                    className="text-[#6C2D38]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mushrooms
                  </Link>
                  <Link 
                    to="/exotics" 
                    className="text-[#6C2D38]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Exotics
                  </Link>
                  <Link 
                    to="/microgreens" 
                    className="text-[#6C2D38]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Microgreens
                  </Link>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <div className="font-semibold text-[#6C2D38] text-lg mb-2">
                  Services
                </div>
                <div className="pl-4">
                  <Link 
                    to="/services" 
                    className="text-[#6C2D38]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    End-to-End Farm Setup
                  </Link>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <div className="font-semibold text-[#6C2D38] text-lg mb-2">
                  Training
                </div>
                <div className="pl-4 flex flex-col gap-2">
                  <Link 
                    to="/training" 
                    className="text-[#6C2D38]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hands-on Skill Lab
                  </Link>
                  <div className="text-[#6C2D38]">
                    Expert Guidance-+916291932784
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-3">
                <Link 
                  to="/blogs" 
                  className="font-semibold text-[#6C2D38] text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <Link 
                  to="/contact-us" 
                  className="font-semibold text-[#6C2D38] text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
              <div className="pt-3 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <Link to="/login">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#6C2D38] text-white rounded hover:bg-[#5b2630]">Dashboard</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};