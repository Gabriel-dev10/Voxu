"use client";

import Navbar from "./components/Navbar";
import QuestoesPopulares from "./components/QuestoesPopulares";


export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <QuestoesPopulares />
    </div>
  );
}
