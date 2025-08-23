import React from "react";

export const AboutSection = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Apprendre à gérer son argent",
      icon: "/icons/education-icon.svg",
    },
    {
      id: 2,
      title: "Simuler et comparer les offres",
      icon: "/icons/compare-icon.svg",
    },
    {
      id: 3,
      title: "Accès facile et sécurisé",
      icon: "/icons/secure-icon.svg",
    },
    {
      id: 4,
      title: "Suivi et certification",
      icon: "/icons/certification-icon.svg",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-teal-800 to-teal-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center text-center px-4 py-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div className="font-['Source_Serif_Pro',Helvetica] text-lg md:text-xl font-medium tracking-[-0.33px] leading-tight">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
