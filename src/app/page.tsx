"use client";

import { PRODUCTS_DATA } from "@/mockData/products";
import Image from "next/image";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const tabArr = [
  { label: "All", path: "all" },
  { label: "Manpower Supply", path: "manpower-supply" },
  { label: "Mobile App/ Websites", path: "mobile-app/websites" },
  { label: "UI/UX Design", path: "ui/ux-design" },
];

export default function Home() {
  const [tabActive, setTabActive] = useState("all");
  const handleClickTab = (pathTab: string) => {
    setTabActive(pathTab);
  };
  return (
    <main className="flex w-screen min-h-screen flex-col items-center p-16 bg-white">
      <div className="flex flex-row w-1/2 justify-between">
        {tabArr?.map((tab, i) => {
          return (
            <div
              onClick={() => {
                handleClickTab(tab?.path);
              }}
              key={i}
              className={` ${
                tabActive === tab.path && "bg-yellow-300"
              } px-3 py-2 rounded-md drop-shadow-md hover:bg-yellow-300 ease-linear duration-150 hover:cursor-pointer  hover:ease-linear hover:duration-150`}
            >
              {tab?.label}
            </div>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-10">
        {PRODUCTS_DATA?.map((product, i) => {
          return (
            <div
              key={i}
              className="flex rounded-md drop-shadow-md ease-linear duration-150 items-center hover:-translate-y-1 hover:drop-shadow-lg hover:ease-linear hover:duration-150"
            >
              <img
                src={product?.img}
                alt={product?.label}
                className="relative"
              />
              <div className="absolute right-0 left-0 bottom-0 flex justify-center">
                <div className="bg-white w-11/12 flex items-center justify-around px-2 py-4 rounded-md drop-shadow-lg mb-4">
                  <div>{product?.label}</div>
                  <div>
                    <FiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
