import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ProductTitle = () => {

    useGSAP(() => {
      const tl = gsap.timeline();

      const firstMsgSplit = SplitText.create(".first-title", {
        type: "chars",
      });
      const secondMsgSplit = SplitText.create(".second-title", {
        type: "chars",
      });

      tl.from(firstMsgSplit.chars, {
        yPercent: 200,
        ease: "power1.inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".first-title",
          start: "top 130%",
          end: "top 115%",
          scrub: true,
        },
      })
        .to(".title-scroll", {
          duration: 0.05,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
          scrollTrigger: {
            trigger: ".title-scroll",
            start: "top 140%",
            end: "top 130%",
            scrub: true,
          },
        })
        .from(secondMsgSplit.chars, {
          yPercent: 200,
          ease: "power1.inOut",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".second-title",
            start: "top 150%",
            end: "top 135%",
            scrub: true,
          },
        });
    });

  return (
    <div className="general-title flex flex-col justify-center items-center h-full gap-32">
      <div className="overflow-hidden text-[#523122] pr-2">
        <h1 className="first-title font-bold uppercase leading-[9vw] text-[7.8vw] tracking-tighter">
          we have 6
        </h1>
      </div>
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        className="title-scroll rotate-[-3deg] translate-y-5 absolute z-10 border-[.5vw] border-[#faeade] -mt-3 tracking-[-0.4em]"
      >
        <div className="bg-[#a26833] pb-3 px-5 ">
          <h1 className="uppercase text-[#faeade] text-center font-bold leading-[9vw] text-[7.8vw]">
            freaking
          </h1>
        </div>
      </div>
      <div className="overflow-hidden text-[#523122] pr-2">
        <h1 className="second-title font-bold uppercase leading-[9vw] text-[7.8vw] tracking-tighter">
          delicious flavours
        </h1>
      </div>
    </div>
  );
};

export default ProductTitle;
