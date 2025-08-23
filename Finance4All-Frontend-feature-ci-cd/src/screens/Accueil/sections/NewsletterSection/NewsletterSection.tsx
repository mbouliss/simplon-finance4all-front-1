import { AtSignIcon, PhoneIcon, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

// export const NewsletterSection = (): JSX.Element => {
//   // State for email input and subscription status
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle email change
//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//     setErrorMessage("");
//   };

//   // Handle subscription
//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic email validation
//     if (!email) {
//       setErrorMessage("Veuillez entrer votre email");
//       return;
//     }
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage("Veuillez entrer un email valide");
//       return;
//     }
    
//     // Simulate API call
//     setIsSubmitting(true);
    
//     // Simulate network delay
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubscribed(true);
//       setEmail("");
      
//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setIsSubscribed(false);
//       }, 5000);
//     }, 1000);
//   };

//   // Footer links data
//   const quickMenuLinks = ["A propos", "Comparateur", "Formations"];
//   const usefulLinks = ["Premier", "Deuxième", "Troisième", "Quatrième"];
//   const supportLinks = [
//     "Centre d'aide",
//     "Conditions d'utilisation",
//     "Mentions légales",
//     "Politique de confidentialité",
//   ];

//   const socialIcons = [
//     { src: "/frame-4.svg", alt: "Frame" },
//     { src: "/frame-1.svg", alt: "Frame" },
//     { src: "/frame-2.svg", alt: "Frame" },
//     { src: "/frame-3.svg", alt: "Frame" },
//     { src: "/frame.svg", alt: "Frame" },
//   ];

//   return (
//     <section className="relative w-full h-[615px]">
//       <div className="relative h-[615px]">
//         {/* Black footer background */}
//         <div className="absolute w-full h-[494px] top-[121px] left-0 bg-black shadow-[0px_20px_40px_#0000001a]">
//           {/* Footer content */}
//           <div className="flex flex-col w-full items-center gap-8 absolute top-[183px] left-0">
//             <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
//               <div className="flex items-start justify-center gap-[129px] relative flex-[0_0_auto]">
//                 {/* Company info and social icons */}
//                 <div className="flex flex-col w-[379px] items-start gap-[31px] relative">
//                   <div className="items-start self-stretch w-full flex-[0_0_auto] flex flex-col gap-4 relative">
//                     <div className="relative self-stretch mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-sm tracking-[0] leading-6">
//                       <span className="font-light">
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry. Lorem Ipsum is simply dummy text
//                         of the printing and typesetting industry.
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-[15px] relative flex-[0_0_auto]">
//                     {socialIcons.map((icon, index) => (
//                       <img
//                         key={index}
//                         className="relative w-6 h-6"
//                         alt={icon.alt}
//                         src={icon.src}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer links section */}
//                 <div className="flex w-[692px] items-start justify-between relative">
//                   {/* Quick menu */}
//                   <div className="flex flex-col w-[89px] items-start gap-3 relative">
//                     <div className="relative self-stretch mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6">
//                       Menu rapide
//                     </div>

//                     <div className="relative self-stretch [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8">
//                       {quickMenuLinks.map((link, index) => (
//                         <React.Fragment key={index}>
//                           {link}
//                           <br />
//                         </React.Fragment>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Useful links */}
//                   <div className="flex-col items-start gap-3 inline-flex relative flex-[0_0_auto]">
//                     <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
//                       Liens utiles
//                     </div>

//                     <a
//                       className="relative w-fit [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8"
//                       href="https://developer.mozilla.org/en-US/docs/Web"
//                       rel="noopener noreferrer"
//                       target="_blank"
//                     >
//                       <span className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8">
//                         {usefulLinks.map((link, index) => (
//                           <React.Fragment key={index}>
//                             {link}
//                             <br />
//                           </React.Fragment>
//                         ))}
//                       </span>
//                     </a>
//                   </div>

//                   {/* Support links */}
//                   <div className="flex-col items-start gap-3 inline-flex relative flex-[0_0_auto]">
//                     <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
//                       Support
//                     </div>

//                     <div className="relative w-fit [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8">
//                       {supportLinks.map((link, index) => (
//                         <React.Fragment key={index}>
//                           {link}
//                           <br />
//                         </React.Fragment>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Contact info */}
//                   <div className="flex-col items-start gap-3 inline-flex relative flex-[0_0_auto]">
//                     <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
//                       Contact
//                     </div>

//                     <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
//                       <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
//                         <PhoneIcon className="w-6 h-6 text-[#eaeaea]" />
//                         <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8 whitespace-nowrap">
//                           00 0000000
//                         </div>
//                       </div>

//                       <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
//                         <AtSignIcon className="w-6 h-6 text-[#eaeaea]" />
//                         <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8 whitespace-nowrap">
//                           support@lorem.com
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <img
//                 className="relative self-stretch w-full h-px object-cover"
//                 alt="Line"
//                 src="/line-1.svg"
//               />
//             </div>

//             {/* Copyright section */}
//             <div className="flex w-[1200px] items-center justify-between relative flex-[0_0_auto]">
//               <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-light text-[#eaeaea] text-sm tracking-[0] leading-6 whitespace-nowrap">
//                 © 2025 Finance forAll. All rights reserved.
//               </div>

//               <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]" />
//             </div>
//           </div>

//           {/* Newsletter subscription card */}
//           <Card className="absolute w-[996px] h-[324px] top-[-189px] left-[222px] rounded-3xl border border-solid border-black bg-white">
//             <CardContent className="p-0 h-full">
//               {/* Shadow effect */}
//               <div className="absolute w-[229px] h-[21px] top-[268px] left-[120px]">
//                 <div className="absolute w-[95px] h-[9px] top-0 left-[67px] bg-[#252d6669] rounded-[47.5px/4.5px]" />
//                 <div className="absolute w-[229px] h-[13px] top-2 left-0 bg-[#152a7d6e] rounded-[114.5px/6.5px] blur-[18px]" />
//               </div>

//               {/* Newsletter content */}
//               <div className="flex flex-col w-[502px] items-start gap-4 absolute top-[90px] left-[422px]">
//                 <div className="relative self-stretch mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-[39.2px]">
//                   Abonnez-vous à notre newsletter pour rester informé.
//                 </div>

//                 <form onSubmit={handleSubscribe} className="flex flex-col w-[372px] items-start gap-[13px] relative flex-[0_0_auto]">
//                   <div className="flex h-[52px] items-center justify-between relative self-stretch w-full bg-[#6cb9c6] rounded-[8px] border border-solid border-[#ffffff33]">
//                     <div className="flex items-center gap-1 pl-4 flex-1">
//                       <AtSignIcon className="w-6 h-6 text-white flex-shrink-0" />
//                       <Input 
//                         type="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         placeholder="Entrez votre email"
//                         className="border-none bg-transparent text-white text-xl placeholder:text-white/80 focus:outline-none focus:ring-0 w-full"
//                       />
//                     </div>
                    
//                     <div className="flex justify-center items-center px-2">
//                       <Button 
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white rounded-[8px] hover:bg-white/90 transition-all duration-200"
//                       >
//                         {isSubmitting ? (
//                           <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#272727] text-sm tracking-[0] leading-6 whitespace-nowrap">
//                             Envoi...
//                           </span>
//                         ) : isSubscribed ? (
//                           <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#272727] text-sm tracking-[0] leading-6 whitespace-nowrap flex items-center gap-1">
//                             <CheckCircle className="w-4 h-4" />
//                             Abonné
//                           </span>
//                         ) : (
//                           <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#272727] text-sm tracking-[0] leading-6 whitespace-nowrap">
//                             S&apos;abonner
//                           </span>
//                         )}
//                       </Button>
//                     </div>
//                   </div>
//                   {errorMessage && (
//                     <div className="text-red-500 text-sm mt-1 ml-2">
//                       {errorMessage}
//                     </div>
//                   )}
//                 </form>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

export const NewsletterSection = (): JSX.Element => {
  // State for email input and subscription status
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  // Handle subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email) {
      setErrorMessage("Veuillez entrer votre email");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Veuillez entrer un email valide");
      return;
    }
    
    // Simulate API call
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1000);
  };

  // Footer links data
  const quickMenuLinks = ["A propos", "Comparateur", "Formations"];
  const usefulLinks = ["Premier", "Deuxième", "Troisième", "Quatrième"];
  const supportLinks = [
    "Centre d'aide",
    "Conditions d'utilisation",
    "Mentions légales",
    "Politique de confidentialité",
  ];

  const socialIcons = [
    { src: "/frame-4.svg", alt: "Frame" },
    { src: "/frame-1.svg", alt: "Frame" },
    { src: "/frame-2.svg", alt: "Frame" },
    { src: "/frame-3.svg", alt: "Frame" },
    { src: "/frame.svg", alt: "Frame" },
  ];

  return (
    <section className="relative w-full h-[615px]">
      <div className="relative h-[615px]">
        {/* Black footer background */}
        <div className="absolute w-full h-[494px] top-[121px] left-0 bg-black shadow-[0px_20px_40px_#0000001a]">
          {/* Footer content */}
          <div className="flex flex-col w-full items-center gap-8 absolute top-[183px] left-0">
            <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-center gap-[129px] relative flex-[0_0_auto]">
                {/* Company info and social icons */}
                <div className="flex flex-col w-[379px] items-start gap-[31px] relative">
                  <div className="items-start self-stretch w-full flex-[0_0_auto] flex flex-col gap-4 relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-sm tracking-[0] leading-6">
                      <span className="font-light">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[15px] relative flex-[0_0_auto]">
                    {socialIcons.map((icon, index) => (
                      <img
                        key={index}
                        className="relative w-6 h-6"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                  </div>
                </div>

                {/* Footer links section */}
                <div className="flex w-[692px] items-start justify-between relative">
                  {/* Quick menu */}
                  <div className="flex flex-col w-[89px] items-start gap-3 relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6">
                      Menu rapide
                    </div>

                    <div className="relative self-stretch [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8">
                      {quickMenuLinks.map((link, index) => (
                        <React.Fragment key={index}>
                          {link}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Useful links */}
                  <div className="flex-col items-start gap-3 inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      Liens utiles
                    </div>

                    <a
                      className="relative w-fit [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8"
                      href="https://developer.mozilla.org/en-US/docs/Web"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8">
                        {usefulLinks.map((link, index) => (
                          <React.Fragment key={index}>
                            {link}
                            <br />
                          </React.Fragment>
                        ))}
                      </span>
                    </a>
                  </div>

                  {/* Support links */}
                  <div className="flex-col items-start gap-3 inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      Support
                    </div>

                    <div className="relative w-fit [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8">
                      {supportLinks.map((link, index) => (
                        <React.Fragment key={index}>
                          {link}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="flex-col items-start gap-3 inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      Contact
                    </div>

                    <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                      <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
                        <PhoneIcon className="w-6 h-6 text-[#eaeaea]" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8 whitespace-nowrap">
                          00 0000000
                        </div>
                      </div>

                      <div className="items-center gap-2 inline-flex relative flex-[0_0_auto]">
                        <AtSignIcon className="w-6 h-6 text-[#eaeaea]" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#eaeaea] text-base tracking-[0] leading-8 whitespace-nowrap">
                          support@lorem.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Line"
                src="/line-1.svg"
              />
            </div>

            {/* Copyright section */}
            <div className="flex w-[1200px] items-center justify-between relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-light text-[#eaeaea] text-sm tracking-[0] leading-6 whitespace-nowrap">
                © 2025 Finance forAll. All rights reserved.
              </div>

              <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]" />
            </div>
          </div>

          {/* Newsletter subscription card */}
          <Card className="absolute w-[996px] h-[324px] top-[-189px] left-[222px] rounded-3xl border border-solid border-black bg-white">
            <CardContent className="p-0 h-full">
              {/* Shadow effect */}
              <div className="absolute w-[229px] h-[21px] top-[268px] left-[120px]">
                <div className="absolute w-[95px] h-[9px] top-0 left-[67px] bg-[#252d6669] rounded-[47.5px/4.5px]" />
                <div className="absolute w-[229px] h-[13px] top-2 left-0 bg-[#152a7d6e] rounded-[114.5px/6.5px] blur-[18px]" />
              </div>

              {/* Newsletter content */}
              <div className="flex flex-col w-[502px] items-start gap-4 absolute top-[90px] left-[422px]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-[39.2px]">
                  Abonnez-vous à notre newsletter pour rester informé.
                </div>

                <form onSubmit={handleSubscribe} className="flex flex-col w-[402px] items-start gap-[13px] relative flex-[0_0_auto]">
                  <div className="flex h-[52px] items-center relative self-stretch w-full bg-[#6cb9c6] rounded-[8px] border border-solid border-[#ffffff33]">
                    <div className="flex items-center gap-1 pl-4 w-2/3">
                      <AtSignIcon className="w-6 h-6 text-white flex-shrink-0" />
                      <Input 
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Entrez votre email"
                        className="border-none bg-transparent text-white text-xl placeholder:text-white/80 focus:outline-none focus:ring-0 w-full"
                      />
                    </div>
                    
                    <div className="flex justify-center w-1/3 pr-2">
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white rounded-[8px] hover:bg-white/90 transition-all duration-200"
                      >
                      {isSubmitting ? (
                        <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#272727] text-sm tracking-[0] leading-6 whitespace-nowrap">
                          Envoi...
                        </span>
                      ) : isSubscribed ? (
                        <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#272727] text-sm tracking-[0] leading-6 whitespace-nowrap flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Abonné
                        </span>
                      ) : (
                        <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#272727] text-sm tracking-[0] leading-6 whitespace-nowrap">
                          S&apos;abonner
                        </span>
                      )}
                      </Button>
                    </div>
                    
                  </div>
                  {errorMessage && (
                    <div className="text-red-500 text-sm mt-1 ml-2">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image */}
        <img
          className="absolute w-[205px] h-[205px] top-0 left-[352px] object-cover"
          alt="Image"
          src="/image-13.png"
        />
      </div>
    
    </section>
  );
};
