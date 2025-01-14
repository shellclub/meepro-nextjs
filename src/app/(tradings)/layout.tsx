"use client";

import { Route } from "@/routers/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FC } from "react";

export interface CommonLayoutProps {
  children?: React.ReactNode;
}



const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
   
      <div className="max-w-12xl mx-auto pt-14 sm:pt-14 pb-14 lg:pb-32">
        {children}
      </div>

  );
};

export default CommonLayout;
