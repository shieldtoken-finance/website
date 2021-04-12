import { Link, useRouteMatch } from "react-router-dom";

function NavLink({ label, to, activeOnlyWhenExact, href }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className="flex items-center">
      <Link
        style={{ color: match ? "gray" : "#0033ad" }}
        to={to}
        href={href}
        className="capitalize text-xl lg:text-base font-bold"
      >
        {label}
      </Link>
    </div>
  );
}

export default NavLink;
