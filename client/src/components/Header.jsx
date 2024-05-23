import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center sm:text-xl text-sm dark:text-white font-semibold"
      >
        <span className="bg-gradient-to-r px-2 py-1 from-[#00C9FF] to-[#92FE9D] rounded-md ">
          Dev
        </span>
        Verse
      </Link>
      <form>
        <TextInput
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="h-10 w-12 lg:hidden" color="gray" pill>
        <AiOutlineSearch size="20px" />
      </Button>
      <div className=" flex gap-2 md:order-2 pr-4">
        <Button className="hidden sm:inline h-10 w-12" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button outline gradientDuoTone="tealToLime">
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as="div">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as="div">
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as="div">
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
