import React from "react";
import CustomMenu from "./CustomMenu";

const Navmenu = () => {
  const menu = [
    {
      id: 1,
      to: "/services/delifood",
      text: "এখন পাবেন",
      color: "010101",
    },
    {
      id: 2,
      to: "/services/delifood/snacks",
      text: "নাস্তা",
      color: "7B1AB5",
    },
    {
      id: 3,
      to: "/services/delifood/lunch",
      text: "দুপুরের খাবার",
      color: "F8A856",
    },
    {
      id: 4,
      to: "/services/delifood/evening-snacks",
      text: "সন্ধার নাস্তা",
      color: "00C797",
    },
    {
      id: 5,
      to: "/services/delifood/juice",
      text: "জুস",
      color: "FF31A6",
    },
  ];
  return (
    <nav className="mt-[23px] mb-[18px]">
      <ul className="container flex gap-3 list-none flex-nowrap overflow-x-scroll whitespace-nowrap overflow-y-hidden pb-3 md:justify-center">
        {menu.map((m) => (
          <CustomMenu key={m.id} to={m.to} color={m.color.toLowerCase()}>
            {m.text}
          </CustomMenu>
        ))}
      </ul>
    </nav>
  );
};

export default Navmenu;
