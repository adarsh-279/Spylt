import ProductSlider from "../components/ProductSlider";
import ProductTitle from "../components/ProductTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Products = () => {
  const innerRef = useRef(null);

  useGSAP(() => {
    const scrollAmt = innerRef.current.scrollWidth - window.innerWidth;

    gsap.to(innerRef.current, {
      x: `-${scrollAmt + 200}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".product-section",
        start: "-70% top",
        end: `+=${scrollAmt + 200}px`,
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div
      className="product-section relative w-full bg-[#faeade]"
      style={{ height: "100vh" }}
    >
      <div
        ref={innerRef}
        className="products-inner relative top-0 left-0 h-screen w-max flex flex-row items-center gap-10"
      >
        <div className="product-text w-[60vw] h-full absolute flex items-center justify-center flex-none">
          <ProductTitle />
        </div>
        <div className="product-slider absolute top-0 left-250 h-full">
          <ProductSlider />
        </div>
      </div>
    </div>
  );
};

export default Products;
