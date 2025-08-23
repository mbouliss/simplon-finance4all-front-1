import { useEffect, useRef } from "react";

// Vous pouvez ajouter les logos de vos partenaires ici
const partnerLogos = [
  { id: 1, src: "https://www.wave.com/img/nav-logo.png", alt: "Partner 1" },
  { id: 2, src: "https://logos-marques.com/wp-content/uploads/2021/07/Orange-Money-logo.png", alt: "Partner 2" },
  { id: 3, src: "https://logos-marques.com/wp-content/uploads/2020/08/Naf-Naf-logo-1536x864.png", alt: "Partner 3" },
  { id: 4, src: "https://logos-marques.com/wp-content/uploads/2024/02/Adidas-Logo.png", alt: "Partner 4" },
  { id: 5, src: "https://logos-marques.com/wp-content/uploads/2020/04/Canal-Logo-1536x864.png", alt: "Partner 5" },
  { id: 6, src: "https://logos-marques.com/wp-content/uploads/2022/10/One-Piece-Logo.png", alt: "Partner 6" },
  // Ajoutez autant de logos que nécessaire
];

export const PartnersSection = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let position = 0;
    const speed = 0.5; // Vitesse de défilement
    
    const scroll = () => {
      position += speed;
      
      // Quand on atteint la fin du premier ensemble de logos, on revient au début
      if (position >= scrollContainer.scrollWidth / 2) {
        position = 0;
      }
      
      scrollContainer.scrollLeft = position;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="w-full mt-8">
      <div className="flex flex-col items-center gap-[40px]">
        <h2 className="font-['Source_Sans_Pro',Helvetica] font-bold text-black text-[32px]">
          Ils font confiance à Financefor all
        </h2>
        
        <div className="w-full overflow-hidden relative">
          <div 
            ref={scrollRef}
            className="flex items-center gap-12 py-4 w-full overflow-x-hidden whitespace-nowrap"
          >
            {/* Première série de logos */}
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="inline-block h-14 min-w-[120px] flex items-center justify-center">
                <img
                  className="h-full object-contain"
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
            
            {/* Duplication des logos pour créer un effet de défilement infini */}
            {partnerLogos.map((logo) => (
              <div key={`dup-${logo.id}`} className="inline-block h-14 min-w-[120px] flex items-center justify-center">
                <img
                  className="h-full object-contain"
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
