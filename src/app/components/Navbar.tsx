"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">

      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-17" />
        <h1 className="text-xl font-bold">VoxU</h1>
      </div>

      <div className="flex space-x-4 mr-20">
        <a href="#" className="hover:underline">Publicações</a>
        <a href="#" className="hover:underline">Comunidades</a>
        <a href="#" className="hover:underline">Mensagem</a>
      </div>

      <div className="flex space-x-2">
        <button className="bg-red-600 px-3 py-1 rounded cursor-pointer">Perfil</button>
      </div>
      
    </nav>
  );
}
