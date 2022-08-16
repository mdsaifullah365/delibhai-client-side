import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const SidebarLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li
      className={`${
        match ? 'text-blue-400' : 'text-base-200'
      } bg-transparent list-none px-3 py-1 border-b-gray-500`}
    >
      <Link className="" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default SidebarLink;
