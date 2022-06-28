import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomMenu = ({ children, to, color, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li
      style={{ backgroundColor: `${match ? '#ffffff' : `#${color}`}` }}
      className={`${
        match ? ' text-black shadow-xl' : ` text-white`
      } text-[15px] leading-[18px] px-3 py-[9px] rounded-full`}>
      <Link className='' to={`/projects/delifood/${to}`} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomMenu;
