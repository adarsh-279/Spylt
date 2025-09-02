const Hero = () => {
  return (
    <div className="bg-[#232224]">
      <div className="hero-container relative bg-[#faeade] w-screen h-dvh overflow-hidden">
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover scale-100"
          src="public\images\static-img.png"
          alt=""
        />
        <div className="hero-content relative z-10 w-full h-full flex flex-col items-center justify-center translate-y-10">
          <div className="overflow-hidden">
            <h1 className="hero-title text-[#523122] font-bold uppercase leading-[9vw] text-[7.8vw] tracking-tight">
              Freaking Delicious
            </h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-scroll rotate-[-3deg] border-[.5vw] border-[#faeade]"
          >
            <div className="bg-[#a26833]">
              <h1 className="hero-title text-[#fce1cd] font-bold uppercase text-[7.8vw] leading-[9vw] tracking-tight px-5 pb-4">
                Protein + Caffeine
              </h1>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="font-[ProximaNova] font-bold text-[#523122] text-center max-w-md px-4 text-md leading-[115%] mt-3">
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid with every deliciously smooth chug.
            </h2>
          </div>
          <div>
            <button className="uppercase px-13 py-4 rounded-full font-[Antonio] font-bold bg-[#e3a458]">
              chug a spylt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
