import React from "react";

export default function JoinUsSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-200 py-24 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Sfondo con bolle decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-10 h-10 bg-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-40 w-6 h-6 bg-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-32 w-14 h-14 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-white opacity-10 rounded-full animate-pulse"></div>
      </div>

      {/* Contenuto */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900">Unisciti a noi!</h2>
        <p className="text-gray-700 mt-4 text-lg">
          Se sei uno studente desideroso di mettere in pratica le tue conoscenze
          e acquisire esperienza nel mondo reale, unisciti a noi per trasformare
          la tua passione in azione!
        </p>

        {/* Pulsante */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition duration-300">
          Contattaci
        </button>
      </div>
    </section>
  );
}
