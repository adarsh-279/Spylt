import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Message = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const pMsgSplit = SplitText.create(".msg-p", {
      type: "words, lines",
    });

    tl.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".first-message",
        start: "top 60%",
        end: "top 25%",
        scrub: true,
      },
    })
      .to(".msg-scroll", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        scrollTrigger: {
          trigger: ".msg-scroll",
          start: "top 90%",
          end: "top 75%",
          scrub: true,
        },
      })
      .to(secondMsgSplit.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: ".second-message",
          start: "top 90%",
          end: "top 65%",
          scrub: true,
        },
      })
        .from(pMsgSplit.words, {
        yPercent: 200,
        opacity: 0,
        ease: "power2.in",
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".msg-p",
          start: "top 150%",
          end: "top 135%",
          scrub: true,
        },
        });
  });

  return (
    <div className="message-content bg-[#7f3b2d] min-h-dvh overflow-hidden flex justify-center items-center relative z-20">
      <div className="container mx-auto flex py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper w-full text-[8vw] font-bold uppercase leading-[8.5vw] tracking-[-.35vw] flex flex-col justify-center items-center gap-24 ">
            <h1 className="first-message text-[#faeade20] w-[50%] uppercase text-center">
              Stir up your fearless past and
            </h1>
            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="msg-scroll rotate-[3deg] translate-y-5 absolute z-10 border-[.5vw] border-[#7f3b2d] -mt-3 tracking-tighter"
            >
              <div className="bg-[#e3a458] pb-3 px-5 ">
                <h2 className="uppercase text-[#7f3b2d] text-center font-bold">
                  fuel up
                </h2>
              </div>
            </div>
            <h1 className="second-message text-[#faeade20] w-[70%] uppercase text-center">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex w-full items-center mt-15">
            <div className="max-w-md mx-auto tracking-wider overflow-hidden text-center">
              <p className="msg-p opacity-100 text-[#faeade] font-[ProximaNova]">
                Rev up your rebel spirit and feed the adventure of <br /> life
                with SPYLT, where you’re one chug away from <br /> epic
                nostalgia and fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
