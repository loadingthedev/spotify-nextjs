import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <Center />
      </div>

      <div>{/* Player */}</div>
    </div>
  );
}
