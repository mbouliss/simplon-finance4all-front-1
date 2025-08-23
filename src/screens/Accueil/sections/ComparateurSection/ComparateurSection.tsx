import { useState } from "react";

// Définition du type pour les cartes de comparateurs
interface ComparateurCard {
  id: number;
  title: string;
  icon: string;
  description: string;
  link: string;
}

// Données des cartes de comparateurs
const comparateurCards: ComparateurCard[] = [
  {
    id: 1,
    title: "Banque",
    icon: "/icons/bank-card.svg",
    description: "Comparez les services bancaires et trouvez la meilleure offre pour vos besoins",
    link: "/comparateur/banque"
  },
  {
    id: 2,
    title: "Microfinance",
    icon: "/icons/microfinance.svg",
    description: "Découvrez les solutions de microfinance adaptées à votre situation",
    link: "/comparateur/microfinance"
  },
  {
    id: 3,
    title: "Mobile-money",
    icon: "/icons/mobile-money.svg",
    description: "Comparez les services de paiement mobile et leurs avantages",
    link: "/comparateur/mobile-money"
  },
  {
    id: 4,
    title: "Fintech",
    icon: "/icons/fintech.svg",
    description: "Explorez les solutions financières technologiques innovantes",
    link: "/comparateur/fintech"
  }
];

export const ComparateurSection = (): JSX.Element => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {comparateurCards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform ${
                hoveredCard === card.id ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="p-6 flex-grow">
                  <div className="flex justify-center mb-4">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <h3 className="text-center text-xl font-semibold text-[#00A9A4] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-center text-gray-600 text-sm">
                    {card.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <a 
                    href={card.link} 
                    className={`block bg-[#00A9A4] text-white text-center py-3 transition-all duration-300 hover:bg-[#008C88] ${
                      hoveredCard === card.id ? "bg-[#008C88]" : ""
                    }`}
                  >
                    <span className="font-medium">Comparer</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
