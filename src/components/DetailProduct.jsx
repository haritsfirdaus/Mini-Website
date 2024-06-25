import GambarDetail1 from "../assets/image/dp1.svg";
import GambarDetail2 from "../assets/image/dp2.svg";
import GambarDetail3 from "../assets/image/dp3.svg";
import GambarDetail4 from "../assets/image/dp4.svg";
import GambarDetail5 from "../assets/image/dp5.svg";
import GambarDetail6 from "../assets/image/dp6.svg";

const DetailProduct = () => {
  return (
    <>
      <div className="w-[1195px] h-[1277px] gap-4 mt-[48px] ml-[120px] mr-[125px] mb-[120px] flex">
        {/* kotak 1 */}
        <nav className="w-[795px] h-[1277px] gap-4 grid grid-cols-2 grid-rows-3">
          <img className="w-[389px] h-[415px]" src={GambarDetail1} alt="" />
          <img className="w-[390px] h-[415px]" src={GambarDetail2} alt="" />
          <img className="w-[389px] h-[415px]" src={GambarDetail3} alt="" />
          <img className="w-[390px] h-[415px]" src={GambarDetail4} alt="" />
          <img className="w-[389px] h-[415px]" src={GambarDetail5} alt="" />
          <img className="w-[390px] h-[415px]" src={GambarDetail6} alt="" />
        </nav>
        {/* kotak 2 */}
        <nav className="w-[384px] h-[596px] gap-[24px] ml-4">
          <div className="w-[189px] h-[58px] gap-[8px]">
            <h1 className="w-[200px] h-[32px] font-bold text-[24px] leading-[31.99px] text-ijoTeal">
              Curology cleaner
            </h1>
            <h2 className="w-[57px] h-[18px] font-normal text-[14px] leading-[17.64px] mt-[8px] text-ijoTeal">
              Aloefera
            </h2>
          </div>
          <div>
            <h1 className="w-[64px] h-[40px] font-bold text-[32px] leading-[40.32px] mt-[24px] text-ijoTeal">
              $50
            </h1>
          </div>
          <div className="w-[384px] h-[450px] gap-[24px] mt-[24px]">
            {/* variant */}
            <section className="w-[243px] h-[64px] gap-[8px]">
              <h1 className="w-[53px] h-[18px] font-normal text-[14px] leading-[17.64px] text-ijoteal">
                Variant :{" "}
              </h1>
              <div className="w-[243px] h-[38px] gap-[8px]">
                <div className="w-[17.64px] h-[38px] gap-[8px] flex mt-[8px]">
                  {/* 25gram */}
                  <nav className="w-[72px] h-[38px] border-[1px] gap-[10px] border-ijoTeal rounded-none hover:bg-ijoTeal hover:text-white">
                    <button className="w-[72px] h-[38px] font-normal text-[14px] leading-[17.64px]">
                      25gram
                    </button>
                  </nav>
                  {/* 50gram */}
                  <nav className="w-[74px] h-[38px] border-[1px] gap-[10px] border-ijoTeal rounded-none hover:bg-ijoTeal hover:text-white">
                    <button className="w-[74px] h-[38px] font-normal text-[14px] leading-[17.64px] text-center">
                      50gram
                    </button>
                  </nav>
                  {/* 100gram */}
                  <nav className="w-[81px] h-[38px] gap-[10px] rounded-none border border-ijoTeal hover:bg-ijoTeal hover:text-white">
                    <button className="w-[81px] h-[38px] font-normal text-[14px] leading-[17.64px]">
                      100gram
                    </button>
                  </nav>
                </div>
              </div>
            </section>
            {/* list detail product */}
            <div className="mt-4 text-justify">
              {/* <ul className="w-full justify-between items-center gap-x-[16px] mt-[24px]"> */}
              <li className="text-[14px] leading-[19.28px] text-gray-500 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </li>
              <li className="text-[14px] leading-[19.28px] text-gray-500 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                illum nam deserunt sunt, est fugiat architecto dolor
              </li>
              <li className="text-[14px] leading-[19.28px] text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                illum nam deserunt sunt, est fugiat architecto dolor, asperiores
              </li>
              <li className="text-[14px] leading-[19.28px] text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                illum nam deserunt sunt
              </li>
              <li className="text-[14px] leading-[19.28px] text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                illum nam deserunt sunt, est fugiat architecto dolor,
                asperiores, voluptas aut animi quaerat quis tempore porro
                delectus omnis expedita qui neque voluptatum?
              </li>
              {/* </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default DetailProduct;
