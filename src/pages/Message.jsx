import React from 'react'

const Message = () => {

  return (
    <div className="message-content bg-[#7f3b2d] text-[#faeade] min-h-dvh overflow-hidden flex justify-center items-center relative z-20">
      <div className="container mx-auto flex py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper w-full text-[8vw] font-bold uppercase leading-[8.5vw] tracking-[-.35vw] flex flex-col justify-center items-center gap-24 ">
            <h1 className="first-message opacity-10 w-[50%] uppercase text-center">
              Stir up your fearless past and
            </h1>
            <div className="msg-scroll rotate-[3deg] translate-y-5 absolute z-10 border-[.5vw] border-[#7f3b2d] -mt-3 tracking-tighter">
              <div className="bg-[#e3a458] pb-3 px-5 ">
                <h2 className="uppercase text-[#7f3b2d] text-center font-bold">
                  fuel up
                </h2>
              </div>
            </div>
            <h1 className="second-message opacity-10 w-[70%] uppercase text-center">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex w-full items-center mt-15">
            <div className="max-w-md mx-auto tracking-wider px-10 overflow-hidden text-center">
              <p className="font-[ProximaNova]">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message