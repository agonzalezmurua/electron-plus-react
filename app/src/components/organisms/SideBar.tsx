import React from "react";
import "twin.macro";

import HomeIcon from "@assets/icons/outline/home.svg";
import SearchIcon from "@assets/icons/outline/search.svg";
import StarIcon from "@assets/icons/solid/star.svg";

const SideBarItem: React.FunctionComponent<{ isFavorite?: boolean }> = (
  props
) => (
  <li tw="text-gray-800 flex items-center space-x-4">
    {props.children}
    {props.isFavorite && (
      <span tw="text-yellow-500 pl-1 hover:text-yellow-300">
        <StarIcon tw="h-5 w-5" />
      </span>
    )}
  </li>
);

const SideBar: React.FunctionComponent = (props) => {
  return (
    <section tw="flex h-screen">
      <nav tw="p-6">
        <section tw="flex">
          <input type="text" tw="rounded mr-4" />
          <SearchIcon tw="h-6 w-6"/>
        </section>
        <ul>
          <SideBarItem>
            <HomeIcon tw="h-6 w-6" />
            <span>Home</span>
          </SideBarItem>
        </ul>
      </nav>
      <section tw="flex-grow p-2">
        <section tw="bg-white rounded-lg h-full p-4 overflow-y-auto shadow">
          {props.children}
        </section>
      </section>
    </section>
  );
};

export default SideBar;
