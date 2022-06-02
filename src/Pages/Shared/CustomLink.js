import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li
      className={`${
        match ? "text-primary" : "text-black"
      } bg-transparent text-black text-sm`}
    >
      <Link className="" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
