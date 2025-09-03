import { flavourlists } from '../constants'

const ProductSlider = () => {

  return (
      <div className='slider-wrapper h-full w-full'>
          <div className='flavours h-full w-full flex flex-row flex-nowrap items-center gap-72'>
              {
                  flavourlists.map((flavour) => {
                      return (
                        <div
                          key={flavour.name}
                          className={`relative z-30 w-[50vw] h-[70vh] flex-none ${flavour.rotation}`}
                        >
                          <img
                            className="absolute bottom-0"
                            src={`/images/${flavour.color}-bg.svg`}
                            alt=""
                          />
                          <img
                            className="drinks absolute left-1/2 -translate-x-1/2 bottom-0 h-full"
                            src={`/images/${flavour.color}-drink.webp`}
                            alt=""
                          />
                          <img
                            className="elements absolute left-1/2 -translate-x-1/2 bottom-0 h-full"
                            src={`/images/${flavour.color}-elements.webp`}
                            alt=""
                          />
                          <h1 className="absolute bottom-10 left-10 text-[#faeade] text-6xl font-semibold uppercase tracking-tighter">
                            {flavour.name}
                          </h1>
                        </div>
                      );
                  })
              }
          </div>
    </div>
  )
}

export default ProductSlider