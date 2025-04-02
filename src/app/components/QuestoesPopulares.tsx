"use client";
import { User } from "lucide-react";

const questions = [
  { name: "Maria Eduarda", info: "Enfermagem" },
  { name: "José Felipe", info: "Engenharia de Software" },
  { name: "Jessica", info: "Medicina" },
  { name: "Douglas Barbosa", info: "Coordenador. Engenharia de Software" },
];

export default function PopularQuestions() {
  return (
    <div className="bg-blue-900 w-full min-h-screen flex flex-col items-center py-10">
      {questions.map((q, index) => (
        <div key={index} className="bg-gray-200 w-11/12 md:w-3/4 p-4 rounded-lg shadow-lg mb-4">
          <div className="flex items-center mb-2">
            <User className="text-black w-6 h-6 mr-2" />
            <div>
              <h3 className="font-bold text-black">{q.name}</h3>
              <p className="text-black">{q.info}</p>
            </div>
          </div>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      ))}
    </div>
  );
}
