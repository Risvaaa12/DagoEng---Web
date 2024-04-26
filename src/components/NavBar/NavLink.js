import React from 'react';

const NavLink = ({ href, label, extraClasses }) => (
  <a href={href} className={`hover:text-[#99BC85] rounded-lg p-2 ${extraClasses || ""}`}>
    {label}
  </a>
);

export default NavLink;