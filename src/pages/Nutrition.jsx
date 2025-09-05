import gsap from "gsap";
import { nutrientLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Nutrition = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-para", {
      type: "words",
    });

    const tl = gsap.timeline();

    tl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.05,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".nutrition-section",
          start: "top 100%",
          end: "top 75%",
          scrub: true,
        },
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power2.inOut",
        stagger: 0.05,
        opacity: 0,
        scrollTrigger: {
          trigger: ".nutrition-section",
          start: "top 100%",
          end: "top 75%",
          scrub: true,
        },
      })
      .to(".nutrition-scroll", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        ease: "circ.out",
        scrollTrigger: {
          trigger: ".nutrition-section",
          start: "top 80%",
          end: "top 65%",
          scrub: true,
        },
      });
  });

  return (
    <div className="nutrition-section h-[120dvh] w-full bg-[#e4d7c1] overflow-hidden relative">
      <img
        className="w-full object-cover"
        src="/images/slider-dip.png"
        alt=""
      />

      <img
        className="w-full absolute h-full left-0 bottom-0 object-bottom object-contain"
        src="\images\big-img.png"
        alt=""
      />

      <div className="flex flex-row justify-between px-10">
        <div className="relative inline-block translate-y-20">
          <div className="general-title relative flex flex-col items-center justify-center text-[8.5rem] font-bold uppercase leading-[9vw] tracking-[-.35vw]">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title text-[#523122] font-bold uppercase leading-[9vw] text-[7.8vw] tracking-tight">
                It still does
              </h1>
            </div>
            <div
              className="nutrition-scroll rotate-[-3deg] border-[.5vw] border-[#e2d4bc] -mt-6"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
            >
              <div className="bg-[#a26833] ">
                <h1 className="text-[#e2d4bc] font-bold uppercase text-[7.8vw] leading-[9vw] tracking-tight px-4 pb-4">
                  body good
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="max-w-xs">
            <p className="nutrition-para opacity-100 text-md text-right font-[ProximaNova]">
              Milk contains a wide array of <br /> nutrients, including
              vitamins, minerals, <br /> and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrient-box absolute bottom-16 w-full">
          <div className="list-wrapper bg-[#fdebd2] rounded-full border-[.5vw] border-[#e8ddca] mx-auto max-w-5xl py-6 flex justify-between items-center">
            {nutrientLists.map((nutrient, index) => {
              return (
                <div
                  key={index}
                  className="relative flex-1 flex flex-col justify-center items-center"
                >
                  <div className="text-[#8f5927]">
                    <p className="font-[ProximaNova] mb-3">{nutrient.label}</p>
                    <p className="font-[ProximaNova] text-xs">up to</p>
                    <p className="font-bold text-3xl">{nutrient.amount}</p>
                  </div>

                  {index !== nutrientLists.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-24 w-px bg-[#C89C6E]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
