import React from "react";
import { Target, Flag, Trophy, Cloud } from "lucide-react"; // Import icone

export default function CoreValuesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titolo */}
        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-1 rounded uppercase">
          Our Core Values
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Our culture is built around key attributes that differentiate us from our competition.
        </h2>
      </div>

      {/* Valori */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12 text-center">
        {/* Passionate */}
        <div className="flex flex-col items-center">
          <Target size={40} strokeWidth={1.5} className="text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900 mt-4">Passionate</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We are intensely enthusiastic about providing a superior experience.
          </p>
        </div>

        {/* Respectful */}
        <div className="flex flex-col items-center">
          <Flag size={40} strokeWidth={1.5} className="text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900 mt-4">Respectful</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We are polite and kind to one another, even when it gets tough.
          </p>
        </div>

        {/* Ownership */}
        <div className="flex flex-col items-center">
          <Trophy size={40} strokeWidth={1.5} className="text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900 mt-4">Ownership</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We are empowered to do our jobs and work towards a common goal.
          </p>
        </div>

        {/* Unified */}
        <div className="flex flex-col items-center">
          <Cloud size={40} strokeWidth={1.5} className="text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900 mt-4">Unified</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We work as a team and trust each other to create a seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
}
