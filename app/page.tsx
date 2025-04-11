import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center text-white">
      <div className="bg-[#111315] w-[90%] h-[40%] rounded-md">
        <Header />
      </div>
    </div>
  );
}
