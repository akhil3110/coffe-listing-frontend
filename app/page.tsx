"use client"
import CoffeCard from "@/components/coffe-card";
import Content from "@/components/content";
import Header from "@/components/header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center text-white px-4 pt-36 pb-16">
      <div className="bg-[#1C1D1F] lg:w-[85%]  rounded-lg">
        <Header />
        <Content />
      </div>
    </div>
  );
}

