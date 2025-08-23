import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Course data for mapping
const courseData = [
  {
    id: 1,
    image:
      "/coin-with-trading-graph-financial-investment-concept-piggy-bank-.png",
    theme: "Finance",
    title: "Gestion de finance",
    duration: "Durée : 4H",
    lessons: "10 leçons",
  },
  {
    id: 2,
    image:
      "/coin-with-trading-graph-financial-investment-concept-piggy-bank--1.png",
    theme: "Épargne",
    title: "Épargne intelligente",
    duration: "Durée : 3H",
    lessons: "8 leçons",
  },
  {
    id: 3,
    image: "/container.png",
    theme: "Investissement",
    title: "Bases de l'investissement",
    duration: "Durée : 5H",
    lessons: "12 leçons",
  },
  {
    id: 4,
    image: "/coin-with-trading-graph-financial-investment-concept-piggy-bank-.png",
    theme: "Budget",
    title: "Budget familial",
    duration: "Durée : 2H",
    lessons: "6 leçons",
  },
  {
    id: 5,
    image: "/coin-with-trading-graph-financial-investment-concept-piggy-bank--1.png",
    theme: "Crédit",
    title: "Comprendre le crédit",
    duration: "Durée : 3H",
    lessons: "9 leçons",
  },
  {
    id: 6,
    image: "/container.png",
    theme: "Retraite",
    title: "Planifier sa retraite",
    duration: "Durée : 4H",
    lessons: "10 leçons",
  },
  {
    id: 7,
    image: "/coin-with-trading-graph-financial-investment-concept-piggy-bank-.png",
    theme: "Immobilier",
    title: "Investir dans l'immobilier",
    duration: "Durée : 6H",
    lessons: "14 leçons",
  },
  {
    id: 8,
    image: "/coin-with-trading-graph-financial-investment-concept-piggy-bank--1.png",
    theme: "Bourse",
    title: "Débuter en bourse",
    duration: "Durée : 5H",
    lessons: "12 leçons",
  },
];

// Testimonial data for mapping
const testimonialData = [
  {
    id: 1,
    image: "/unsplash-ohkelokq3re.png",
    name: "Babacar",
    fontFamily: "'Source_Sans_Pro',Helvetica",
    quote:
      '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
  },
  {
    id: 2,
    image: "/unsplash-wmd64tmfc4k.png",
    name: "Anna",
    fontFamily: "'Playfair_Display',Helvetica",
    quote:
      '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
  },
  {
    id: 3,
    image: "/unsplash-6anudmpilw4.png",
    name: "Jaafar",
    fontFamily: "'Playfair_Display',Helvetica",
    quote:
      '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
  },
];

export const EducationSection = (): JSX.Element => {
  const [showMore, setShowMore] = useState(false);

  // Afficher seulement les 4 premiers cours initialement
  const visibleCourses = showMore ? courseData : courseData.slice(0, 4);

  const handleShowMore = () => {
    showMore  ? setShowMore(false) : setShowMore(true);
  };

  const handleSeeAll = () => {
    // Redirection vers la page des cours
    window.location.href = '/education';
  };

  return (
    <section className="flex flex-col w-full max-w-[1244px] mx-auto gap-[19px] py-8">
      {/* Courses Section */}
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleCourses.map((course) => (
            <Card
              key={course.id}
              className="w-full h-[330px] rounded-2xl border-2 border-[#e8eef7] shadow-[0px_4px_4px_#00000040] overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="w-full h-[178px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-[168px] object-cover"
                  alt={course.title}
                  src={course.image}
                />
              </div>

              <CardContent className="p-0">
                <div className="w-full h-[74px] mt-[25px] mx-[8px]">
                  <div className="relative w-full h-[74px]">
                    <div className="flex flex-col w-full items-start gap-2">
                      <div className="px-0 h-5 bg-white rounded-[10px] overflow-hidden">
                        <div className="font-normal text-[#0994ac] text-base">
                          {course.theme}
                        </div>
                      </div>

                      <div className="w-full h-5">
                        <div className="w-full h-5">
                          <div className="font-semibold text-[#0f1114] text-xl tracking-[-0.05px] leading-5 whitespace-nowrap">
                            {course.title}
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-[18px] font-normal text-[#5b6780] text-base whitespace-nowrap">
                        {course.duration}
                      </div>
                    </div>

                    <div className="absolute w-[71px] top-14 right-0 font-normal text-[#5b6780] text-base whitespace-nowrap">
                      {course.lessons}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-[30px] mt-10">
          {!showMore ? (
            <Button 
              onClick={handleShowMore}
              className="w-[159px] h-12 bg-[#6cb9c6] text-black font-semibold text-base rounded shadow-[inset_0px_0px_0px_1px_#0056d2] hover:bg-[#5ba9b6]"
            >
              Afficher plus
            </Button>
          ) : (
            <Button 
              onClick={handleShowMore}
              className="w-[159px] h-12 bg-[#6cb9c6] text-black font-semibold text-base rounded shadow-[inset_0px_0px_0px_1px_#0056d2] hover:bg-[#5ba9b6]"
            >
              Afficher moins
            </Button>
          )}

          <Button
            variant="outline"
            onClick={handleSeeAll}
            className="w-[130.27px] h-12 bg-white rounded border-2 border-black shadow-[inset_0px_0px_0px_1px_#0056d2] font-semibold text-black text-base"
          >
            Voir tout
            <ArrowRightIcon className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-wrap gap-[21px] mt-4">
        {testimonialData.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="flex flex-col w-[381px] h-[340px] items-center justify-center px-6 py-10 rounded-[32px] border-2 border-[#6cb9c6] shadow-[0px_4px_4px_#00000040]"
          >
            <CardContent className="flex flex-col items-center justify-center p-0 w-full h-full">
              <img
                className="w-[170px] h-[170px] mt-[-24.50px]"
                alt={`Photo of ${testimonial.name}`}
                src={testimonial.image}
              />

              <div className="flex flex-col items-center gap-4 mb-[-24.50px]">
                <div
                  className="w-fit mt-[-1.00px] font-bold text-[#6cb9c6] text-2xl text-center leading-9 whitespace-nowrap"
                  style={{ fontFamily: testimonial.fontFamily }}
                >
                  {testimonial.name}
                </div>

                <div className="flex items-start gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      className="w-[23.78px] h-[22.61px]"
                      alt="Star"
                      src="/star-1.svg"
                    />
                  ))}
                </div>

                <div className="w-[292px] font-normal text-black text-[10px] text-center leading-[15px]">
                  {testimonial.quote}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
