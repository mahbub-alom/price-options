import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/contact", name: "Contact" },
    { id: 3, path: "/about", name: "About" },
    { id: 4, path: "/service", name: "Service" },
    { id: 5, path: "/class", name: "Class" },
  ];

  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open == true ? <RxCross1></RxCross1> : <RiMenu2Line></RiMenu2Line>}
      </div>
      <ul className={`md:flex mt-5 absolute md:static duration-1000 px-10 ${open?"top-8":"-top-60"}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
