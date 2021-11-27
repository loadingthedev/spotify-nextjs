import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div>
        <Sidebar />
        {/* center */}
      </div>

      <div>{/* Player */}</div>
    </div>
  );
}
