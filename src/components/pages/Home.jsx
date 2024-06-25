import ViewMore from "../ViewMore";
import DataKrim from "../data/DataKrim";
import OurProduct from "../data/OurProduct";
import BgBlue from "../../assets/image/bg-blue.svg";
import { useState } from "react";

export default function Body() {
  const [TotalImage, setTotalImage] = useState(3)
  const [CurrentPage, setCurrentPage] = useState(1)
  const last = TotalImage * CurrentPage
  const first = TotalImage - last
  const Gambar = DataKrim.slice(first,last)
  return (
    <>
      <nav className="flex flex-col md:flex-row pt-[60px]">
        <div className="text-[96px] text-ijoTeal my-[125.5px] ml-[96px] mr-[48px] text-right w-[286px] h-[424px] leading-[106px]">
          <h1>Beauty for every one</h1>
        </div>

        <div className="mr-[96px] relative">
          <img className="" src="../src/assets/image/bg-home.svg" alt="" />
          <div className="absolute inset-0 flex mt-80">
            <span className="flex gap-8 text-white">
              <div className="border w-20 h-0.5 border-white ml-2"></div>
              <div>
                <p className="text-[14px] leading-[21px] h-[147px] w-[686px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
                <ViewMore custom={`border border-white text-white`}></ViewMore>
              </div>
            </span>
          </div>
        </div>
      </nav>

      <nav className="flex flex-col md:flex-row gap-4 ml-[150px] mr-[84px] my-[120px]">
        <span className="space-y-36">
          <div>
            <h1 className="w-[207px] h-[75px] text-[32px] leading-[42.66px] text-ijoTeal">
              Best Product Of Us
            </h1>
            <h2 className="w-[288px] h-[95px] font-normal text-[14px] leading-[19.12px] text-gray-600 pt-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </h2>
          </div>
          <ViewMore></ViewMore>
        </span>
        <div className="flex gap-2 items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Gambar.map((item) => (
              <main key={item.id}>
                <img className="w-full h-[297px]" src={item.img} alt="" />
                <div>
                  <h1 className="w-[98px] h-[23px] font-bold text-[17px] leading-[22.68px] mt-[19px] ml-[25px] mr-[125px]">
                    {item.name}
                  </h1>
                  <span className="flex justify-between">
                    <div className="w-[85px] h-[19px] font-normal text-[14px] leading-[19.12px] text-center py-[17px] text-gray-400">
                      Rp{item.price}
                    </div>
                    <div className="w-[71px] h-[18px] font-normal text-[14px] leading-[17.64px] text-gray-400 py-[17px]">
                      {item.desc}
                    </div>
                  </span>
                </div>
              </main>
            ))}
          </div>
        </div>
      </nav>

      <nav className="w-full md:w-[1440px] h-[471px] flex my-[120px] relative">
        <span className="w-full md:w-[1206px] h-[271px] pt-[112px] pl-[150px] flex relative z-10">
          <div>
            <h1 className="w-[397px] h-[352px] pt-[-81px] font-extrabold text-[96px] leading-[124px] text-ijoTeal mt-[31px] mb-[88px] ml-[0px] font-serif relative z-10">
              Best product for you
            </h1>
          </div>
          <div className="space-y-2">
            <div className="ml-[120px] mt-[121px] relative z-10 flex gap-8">
              <p className="border border-ijoTeal w-24 h-0"></p>
              <p className="w-[612px] h-[168px] font-normal text-[14px] leading-[21px] relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
            <ViewMore></ViewMore>
          </div>
        </span>
        <img
          className="absolute w-full md:w-[1084px] h-[471px] ml-[356px] top-0 left-0 z-0"
          src={BgBlue}
          alt=""
        />
      </nav>

      {/* our product */}
      <nav className="flex flex-col md:flex-row gap-4 ml-[150px] mr-[84px] my-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {OurProduct.map((item) => (
            <>
              <main key={item.id}>
                <img className="w-full h-[297px]" src={item.img} alt="" />
                <div>
                  <h1 className="w-[98px] h-[23px] font-bold text-[17px] leading-[22.68px] mt-[19px] ml-[25px] mr-[125px]">
                    {item.name}
                  </h1>
                  <span className="flex justify-between">
                    <div className="w-[85px] h-[19px] font-normal text-[14px] leading-[19.12px] text-center py-[17px] text-gray-400">
                      Rp{item.price}
                    </div>
                    <div className="w-[71px] h-[18px] font-normal text-[14px] leading-[17.64px] text-gray-400 py-[17px]">
                      {item.desc}
                    </div>
                  </span>
                </div>
              </main>
            </>
          ))}
        </div>
      </nav>
    </>
  );
}
