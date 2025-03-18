import React from "react";

export default function WhyUsSection() {
  return (
    <section className="py-16 px-6 bg-white flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Contenuto Testuale */}
      <div className="max-w-lg text-left">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Why choose services <br /> from Tecnologia?
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Tecnologia services provide businesses with an edge over the
          competition with a variety of benefits. Opting for outsourced IT
          services improves business efficiency and builds trust with customers
          and clients. Our services can be tailored to meet specific needs to
          match your specific goals.
        </p>

        {/* Pulsante CTA */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition duration-300">
          Get in touch
        </button>
      </div>

      {/* Immagine */}
      <div className="w-full md:w-1/2">
        <img
          src="/code.jpg"
          alt="Coding Screen"
          className="w-full h-[350px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
