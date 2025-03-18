import React from "react";

export default function ServicesSolutionsSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Intestazione */}
      <div className="max-w-4xl mx-auto">
        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-1 rounded uppercase">
          Solutions
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Services & Solutions
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Take your company to new heights by investing in our reliable and efficient technology solutions.
        </p>
      </div>

      {/* Immagine in formato wide */}
      <div className="mt-12 max-w-6xl mx-auto">
        <img
          src="/office-people.jpg"
          alt="Team Working"
          className="w-full h-[350px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Descrizione */}
      <div className="max-w-3xl mx-auto mt-6 text-lg text-gray-700">
        <p>
          Tecnologia is your trusted partner for IT management, data security, and cloud technology 
          with one goal in mind: to transform the way your business works in order to save you time 
          and money.
        </p>
      </div>
    </section>
  );
}
