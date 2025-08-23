import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon, CheckCircle, TrendingUp, ShieldCheck, Users } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
    <CardContent className="p-6 flex flex-col items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-[#6cb9c6] to-[#008C88] rounded-lg text-white">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-[#0f1114]">{title}</h3>
      <p className="text-[#5b6780] text-base">{description}</p>
    </CardContent>
  </Card>
);

export const FeaturesSection = (): JSX.Element => {
  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "Comparaison en temps réel",
      description: "Accédez aux meilleures offres financières avec des comparaisons actualisées en temps réel."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Décisions éclairées",
      description: "Prenez des décisions financières informées grâce à nos outils d'analyse et de comparaison."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Sécurité garantie",
      description: "Vos données sont protégées avec les plus hauts standards de sécurité et de confidentialité."
    },
    {
      icon: <Users size={24} />,
      title: "Communauté active",
      description: "Rejoignez une communauté d'utilisateurs partageant leurs expériences et conseils financiers."
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-[#f8fcfd]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] md:text-[64px] font-normal tracking-[-1.41px] leading-tight [font-family:'Source_Serif_Pro',Helvetica] text-[#0f1114] mb-6">
            À propos de notre plateforme
          </h2>
          <p className="text-xl text-[#5b6780] max-w-3xl mx-auto">
            Finance For All vous aide à prendre de meilleures décisions financières grâce à des outils de comparaison innovants et une éducation financière accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6 text-[#0f1114]">
              Simplifiez vos choix financiers
            </h3>
            <p className="text-lg leading-relaxed text-[#5b6780] mb-8">
              Notre plateforme vous permet de comparer facilement les offres des banques, microfinances, services de mobile-money et fintechs. Nous vous aidons à trouver les meilleures options adaptées à vos besoins spécifiques.
            </p>
            <Button className="bg-[#6cb9c6] hover:bg-[#008C88] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
              Découvrir nos services
              <ArrowRightIcon size={18} />
            </Button>
          </div>

          <div className="w-full md:w-1/2 relative h-[400px] overflow-hidden rounded-xl">
            <div className="absolute w-[280px] h-[340px] top-0 left-0 rounded-lg overflow-hidden shadow-xl transform rotate-[-5deg] z-10">
              <img
                className="w-full h-full object-cover"
                alt="Services financiers"
                src="/image.png"
              />
            </div>
            <div className="absolute w-[280px] h-[340px] bottom-0 right-0 rounded-lg overflow-hidden shadow-xl transform rotate-[5deg] z-20">
              <img
                className="w-full h-full object-cover"
                alt="Éducation financière"
                src="/image-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
