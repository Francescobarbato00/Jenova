import React from "react";

export default function BetterTogetherSection() {
  return (
    <section className="py-16 px-6 bg-white flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Contenuto Testuale */}
      <div className="max-w-lg text-left">
        <h2 className="text-4xl font-bold text-gray-900">Better together</h2>
        <p className="text-gray-700 mt-4 text-lg">
          We know that work is important, but so is play! We respect all of
          our partnerships, and we make every effort to engage in fun ways
          that solve critical problems and leave a smile on your face at the same time.
        </p>
        <p className="text-gray-700 mt-4 text-lg">
          We love our job and love helping our clients. Life is just too short
          to not enjoy every minute!
        </p>

        {/* Pulsante */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition duration-300">
          Get in touch
        </button>
      </div>

      {/* Immagine */}
      <div className="w-full md:w-1/2">
        <img
          src="/back.jpg"
          alt="Team Meeting"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
