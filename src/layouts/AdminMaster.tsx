import "assets/admin/admin-main.scss";
import React from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
function CustomLink({ to, children, ...props }: { to: string; children: React.ReactNode }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let classN = "text-white no-underline font-semibold block w-full border-l-2 border-solid border-transparent relative";
  if (match) {
    classN += " active";
  }
  return (
    <Link to={to} {...props} className={classN}>
      {children}
    </Link>
  );
}
function AdminMaster() {
  return (
    <div className="text-base text-black">
      <nav className="fixed w-64 h-full left-0 bg-current">
        <div className="text-white text-4xl font-semibold py-3 text-center tracking-widest">Side menu</div>
        <ul className="w-full list-none">
          <li>
            <a href="#" className="text-white no-underline font-semibold block w-full border-l-2 border-solid border-transparent relative">
              Logout
            </a>
          </li>
        </ul>
      </nav>
      <div className="ml-64 p-1">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminMaster;
