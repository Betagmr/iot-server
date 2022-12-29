import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { classNames } from 'src/constant/helpers';
import { routes } from 'src/constant/routes';


const TopLogo = () => {
  return (
    <div className="flex items-center justify-between ml-5 mb-2">
      <div className="flex gap-1">
        <h2 className="text-2xl pl-2">Raspberry<span className="text-red-500"> Panel</span></h2>
      </div>
    </div>
  )
};

export const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="fixed h-screen w-64 bg-white shadow pt-4">
      <TopLogo />
      <nav className="flex flex-col gap-1 p-2 h-full">
        {routes.map(route =>
          <Link
            href={route.path}
            key={route.name}
            className={classNames(
              "flex items-center justify-start gap-4 px-3 py-2 hover:translate-x-2 transition-transform",
              router.pathname === route.path ? "text-[#7380ec] font-bold" : "text-gray-600"
            )}
          >
            <route.icon className="w-7" />
            <span className="text-base">{route.name}</span>
          </Link>)
        }
      </nav>
    </aside>
  )
};
