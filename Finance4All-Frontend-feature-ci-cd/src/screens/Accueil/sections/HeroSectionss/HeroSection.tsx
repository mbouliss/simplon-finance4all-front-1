import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for service cards
  const serviceCards = [
    {
      id: 1,
      title: "Banque",
      description: "ipsum quia dolor sit amet, consectetur, adipisci velit",
      iconUrl: "..//icon.png",
    },
    {
      id: 2,
      title: "Microfinance",
      description: "ipsum quia dolor sit amet, consectetur, adipisci velit",
      iconUrl: "..//icon-1.png",
    },
    {
      id: 3,
      title: "Mobile-money",
      description: "ipsum quia dolor sit amet, consectetur, adipisci velit",
      iconUrl: "..//icon-3.png",
    },
    {
      id: 4,
      title: "Fintech",
      description: "ipsum quia dolor sit amet, consectetur, adipisci velit",
      iconUrl: "..//icon-3.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-[42px] w-full py-8">
      {serviceCards.map((card) => (
        <Card
          key={card.id}
          className="w-[235px] h-[270px] rounded-[10px] overflow-hidden shadow-[0px_0px_10px_2px_#cccccc] relative"
        >
          <CardContent className="p-0 h-full flex flex-col items-center">
            <div
              className="w-[95px] h-[95px] mt-5 mb-[29px]"
              style={{ background: `url(${card.iconUrl}) 50% 50% / cover` }}
            />
            <div className="w-[153px] text-center font-['Source_Sans_Pro',Helvetica]">
              <span className="font-bold text-[#6cb9c6] text-xl block">
                {card.title}
              </span>
              <span className="text-black text-base block mt-1">
                {card.description}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
