import React from "react";
import { ShieldCheck, Code, Smartphone, Cloud, Users, Briefcase } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: "Managed Services",
      description: "Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT."
    },
    {
      icon: <Briefcase size={40} className="text-blue-600" />,
      title: "IT Consulting & Advisory",
      description: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth."
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Cyber Security",
      description: "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data."
    },
    {
      icon: <Code size={40} className="text-blue-600" />,
      title: "Web Development",
      description: "Our web development services can help you establish an impactful online presence and reach your target audience effectively."
    },
    {
      icon: <Smartphone size={40} className="text-blue-600" />,
      title: "Mobile Development",
      description: "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."
    },
    {
      icon: <Cloud size={40} className="text-blue-600" />,
      title: "Cloud Services",
      description: "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals."
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between transition-transform transform hover:scale-105">
            <div>
              {/* Icona */}
              <div className="mb-4">{service.icon}</div>
              {/* Titolo */}
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              {/* Descrizione */}
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
            {/* Link */}
            <a href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
