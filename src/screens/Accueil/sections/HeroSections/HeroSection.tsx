
import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "/businessman.png",
      alt: "Businessman finger drawing arrow graph showing business development success"
    },
    {
      src: "/slide2.png",
      alt: "Businessman finger drawing arrow graph showing business development success"
    },
    {
      src: "/slide3.png",
      alt: "Businessman finger drawing arrow graph showing business development success"
    },
    {
      src: "/slide4.png",
      alt: "Businessman finger drawing arrow graph showing business development success"
    },
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative h-[80vh]">
      <div className="w-full h-full overflow-hidden bg-gradient-to-b from-white via-white to-[rgba(108,185,198,0.7)]">
        <div className="container mx-auto px-6 lg:px-24 h-full flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="font-['Source_Serif_Pro',Helvetica] font-normal text-black text-5xl md:text-6xl lg:text-[80px] tracking-[-1.76px] leading-tight transition-all duration-500 ease-in-out">
                Finance4All : Prenez le pouvoir sur vos finances !
              </h1>
              
              <p className="opacity-70 font-['Source_Sans_Pro',Helvetica] font-normal text-black text-2xl md:text-3xl leading-relaxed transition-all duration-500 ease-in-out">
                Formez-vous, simulez, et choisissez les meilleures solutions
                financières en toute autonomie.
              </p>

              <div className="flex flex-row gap-6 mt-10 transition-all duration-500 ease-in-out">
                <Button className="w-[232px] h-[67px] bg-[#6cb9c6] text-black rounded-[10px] shadow-[0px_4px_4px_#00000040] hover:bg-[#5ba8b5] transition-all duration-300">
                  <span className="font-['Source_Sans_Pro',Helvetica] font-normal text-xl">
                    Comparer maintenant
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="w-[253px] h-[67px] bg-[#6cb9c603] text-black rounded-[10px] border-2 border-black shadow-[0px_4px_4px_#00000040] hover:bg-[#6cb9c610] transition-all duration-300"
                >
                  <span className="font-['Source_Sans_Pro',Helvetica] font-normal text-xl">
                    Découvrir les formations
                  </span>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative overflow-hidden  transition-all duration-500 ease-in-out h-[70vh]">
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={image.alt}
                    src={image.src}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.src}`);
                      e.currentTarget.src = '/image.png'; // Fallback image
                    }}
                  />
                </div>
              ))}
              
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
