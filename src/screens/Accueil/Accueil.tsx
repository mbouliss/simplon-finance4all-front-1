import React from "react";
import { Button } from "../../components/ui/button";
import { AboutSection } from "./sections/AboutSection";
import { HeroSection } from "./sections/HeroSections";
import { EducationSection } from "./sections/EducationSection";
import { FeaturesSection } from "./sections/FeaturesSection";
// import { HeroSection } from "./sections/HeroSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { NavBar } from "../../lib/sections/navbar";
import { PartnersSection } from "./sections/PartnersSection";
import { ComparateurSection } from "./sections/ComparateurSection";

export const Accueil = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative pt-[100px]">
        {/* <div className="w-full">
          <HeroSection />
        </div> */}

        <div className="w-full">
          <NavBar />
        </div>

        <div className="w-full">
          <HeroSection />
         
        </div> 

        <PartnersSection /> 

        

       

      

        <div className="w-full mt-8">
          <FeaturesSection />
        </div>


        <div className="w-full mt-16">
          <AboutSection />
        </div> 

        <div className="w-full mt-16 flex justify-center">
          <h2 className="text-center [text-shadow:0px_4px_4px_#00000040] font-['Source_Serif_Pro',Helvetica] font-normal text-black text-[64px] tracking-[-1.41px] leading-[83.2px]">
            Comparer selon vos besoins
          </h2>
        </div>

        <div className="w-full mt-8">
          <ComparateurSection />
        </div>

        <div className="w-full mt-16 flex justify-center">
          <h2 className="text-center [text-shadow:0px_4px_4px_#00000040] font-['Source_Serif_Pro',Helvetica] font-normal text-black text-[64px] tracking-[-1.41px] leading-[83.2px]">
            Education financière
          </h2>
        </div>

        <div className="w-full mt-8">
          <EducationSection />
        </div>

        <div className="w-full mt-16">
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
};
