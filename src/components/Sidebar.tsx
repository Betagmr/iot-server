import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { classNames } from 'src/constant/helpers';
import { routes } from 'src/constant/routes';


const TopLogo = () => {
  return (
    <div className={"top"}>
      <div className={"logo"}>
        {/* <img src={"./images/logo.png"} alt={""}/> */}
        <h2>Raspberry<span className={"danger"}> Panel</span></h2>
      </div>
      <div className={"close"} id={"close-btn"}>
        <span className="material-icons-sharp">close</span>
      </div>
    </div>
  )
}



const Navbar = () => {
  const router = useRouter();

  return (
    <div className={"sidebar"}>
      <TopLogo />
      {routes.map(route =>
        <Link
          href={route.path}
          key={route.name}
          className={classNames(
            "hover:translate-x-2 transition-transform",
            router.pathname === route.path ? "text-[#7380ec] font-bold" : ""
          )}
        >
          <route.icon className="w-8" />
          <h3>{route.name}</h3>
        </Link>)
      }
    </div>
  )
}


const Sidebar = () => {
  return (
    <aside>
      <Navbar />
    </aside>
  )
}

export default Sidebar;