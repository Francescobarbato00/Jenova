import React from "react";

export default function ITServicesSection() {
  return (
    <section className="py-20 px-6 bg-white flex flex-col items-center text-center">
      {/* Titolo */}
      <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
        Comprehensive IT <br />
        services for businesses
      </h2>

      {/* Testo allineato e bilanciato */}
      <div className="mt-8 max-w-5xl flex flex-col md:flex-row gap-12 text-gray-700 text-lg text-left">
        <p className="md:w-1/2 leading-relaxed">
          When we say comprehensive, we mean comprehensive. Tecnologia has the experience
          and expertise to provide an excellent experience across spheres, for truly holistic IT.
        </p>
        <p className="md:w-1/2 leading-relaxed">
          Some MSPs struggle to offer consulting or network services. But your organization 
          needs the entire experience to stop worrying about IT. Learn more about our services below.
        </p>
      </div>
    </section>
  );
}
