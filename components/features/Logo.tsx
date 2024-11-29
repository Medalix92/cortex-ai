"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="cursor-pointer"
      alt="logo"
      height={"60"}
      width={"230"}
      src="/assets/logo-bw.png"
    />
  );
};

export default Logo;
