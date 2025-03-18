import React, { useEffect, useState, useRef } from "react";

export default function TimelineSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && ballRef.current) {
        const timelineTop = timelineRef.current.getBoundingClientRect().top + window.scrollY;
        const timelineHeight = timelineRef.current.clientHeight;
        const maxPosition = timelineTop + timelineHeight - 50; // Limite inferiore per fermare la pallina

        let scrollY = window.scrollY + window.innerHeight / 3;

        // Impedisce alla pallina di scendere oltre la timeline
        if (scrollY > maxPosition) {
          scrollY = maxPosition;
        } else if (scrollY < timelineTop) {
          scrollY = timelineTop;
        }

        setScrollPosition(scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      {/* Titolo */}
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1 rounded uppercase">
          About
        </span>
        <h2 className="text-5xl font-bold text-gray-900 mt-4">
          Dedicated to Delivering Excellence
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Everyone has a story. Here is ours.
        </p>
      </div>

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* Linea verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-blue-400 to-blue-200"></div>

        {/* Pallina blu che scorre */}
        <div
          ref={ballRef}
          className="fixed left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 border-4 border-white shadow-xl rounded-full transition-all duration-300"
          style={{ top: `${scrollPosition}px` }}
        ></div>

        {/* Eventi della timeline */}
        <div className="space-y-20">
          {/* Evento 1 */}
          <div className="flex items-center justify-between">
            <div className="w-1/2 pr-8">
              <img
                src="/team1.jpg"
                alt="The Beginning"
                className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-2xl font-bold text-gray-900">The Beginning</h3>
              <p className="text-gray-600 mt-3 text-lg">
                Our journey began in 1995 when two college friends got together
                and started selling computers and engineering calculators.
              </p>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="flex items-center justify-between">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              <p className="text-gray-600 mt-3 text-lg">
                We aim to provide top-tier IT services while maintaining the
                personal touch of local providers.
              </p>
            </div>
            <div className="w-1/2 pl-8">
              <img
                src="/team2.jpg"
                alt="Mission"
                className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Evento 3 */}
          <div className="flex items-center justify-between">
            <div className="w-1/2 pr-8">
              <img
                src="/team3.jpg"
                alt="We are global"
                className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="w-1/2 pl-8">
              <h3 className="text-2xl font-bold text-gray-900">We Are Global</h3>
              <p className="text-gray-600 mt-3 text-lg">
                Our international network enables us to deliver industry-leading
                IT solutions, cybersecurity, and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
