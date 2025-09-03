import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ProductTitle = () => {

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
