import { useState } from "react";
import AllProduct from "../data/AllProduct";
// import { Link } from "react-router-dom";
// import DetailProduct from "../DetailProduct";
// import { Component } from "react"

export default function Product() {
  const [dropDown, setDropDown] = useState(false);
  const down = () => setDropDown(!dropDown);
  return (
    <>
      <div title="Navbar"></div>
      <div>
        <nav className="w-[991px] h-[64px] mt-[65px] ml-[120px] mr-[329px] gap-[24px] flex">
          <h1 className="w-[258px] h-[64px] font-bold text-[48px] leading-[63.98px] text-teal-900">
            All Product
          </h1>
          <div className="w-[100px] border h-[1px] border-teal-900 my-[32px]"></div>
          <p className="w-[585px] h-[51px] font-normal text-[14px] leading-[16.94px] text-gray-600 text-justify">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac Jorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac{" "}
          </p>
        </nav>

        {/* <!-- search something --> */}
        <nav className="w-[1199px] h-[56px] gap-[20px] ml-[120px] mt-[32px] flex justify-between mr-[121px] mb-4">
          {/* <!-- search --> */}
          <span className="w-[551px] h-[56px] border-[1px] py-[16px] pl-[16px] pr-[200px] gap-[10px] border-teal-900">
            <button className="w-[141px] h-[20px] font-normal text-[16px] leading-[20.16px] justify-center">
              Search something
            </button>
          </span>
          {/* <!-- kategori, tipe, style, price --> */}
          <span className="w-[628px] h-[56px] gap-[16px]">
            {/* <!-- kategori --> */}
            <button
              onClick={down}
              className="w-[171px] h-[56px] border-[1px] py-[16px] px-[32px] gap-[10px] border-teal-900"
            >
              Category
            </button>
            {/* <!-- menu --> */}
            {dropDown && (
              <span className="">
                <ul className="border rounded-none h-[448px] absolute backdrop-blur-3xl w-[184px] ml-[0px] mt-[16px] px-[32px] py-[16px]">
                  <li className="w-[72px] h-[32px] font-normal text-[16px] leading-[32px] mt-[-6px] mb-[8px] hover:font-bold cursor-pointer">
                    Skin Care
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[104px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Face MakeUp
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[70px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Hair Care
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[81px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Body Care
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[71px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Nail Care
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[68px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Parfume
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[71px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Eye Care
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[90px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Dental Care
                  </li>
                  <div className="w-[120px] border-[0.5px] border-gray-300"></div>
                  <li className="w-[113px] h-[32px] font-normal text-[16px] leading-[32px] my-[8px] hover:font-bold cursor-pointer">
                    Other Product
                  </li>
                </ul>
              </span>
            )}
            {/* <!-- tipe --> */}
            <button className="w-[135px] h-[56px] border-[1px] py-[16px] px-[32px] gap-[10px] border-teal-900">
              <input type="button" value="Type" />
            </button>
            {/* <!-- style --> */}
            <button className="w-[137px] h-[56px] border-[1px] py-[16px] px-[32px] gap-[10px] border-teal-900">
              <input type="button" value="Style" />
            </button>
            {/* <!-- price --> */}
            <button className="w-[135px] h-[56px] border-[1px] py-[16px] px-[32px] gap-[10px] border-teal-900">
              <input type="button" value="Price" />
            </button>
          </span>
        </nav>

        {/* <!-- list produk --> */}
        {/* all product */}
        <nav className="grid grid-cols-4 grid-rows-3 mx-[120px] gap-4">
          {AllProduct.map((item) => (
            <a href={`/detail-product/${item.id}`} key={item.id}>
              {" "}
              {/* Tautan ke halaman detail produk */}
              <main>
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
            </a>
          ))}
        </nav>

        {/* <!-- button --> */}
        <nav className="w-[400px] h-[50px] mx-[520px] mt-[48px] flex gap-4 mb-[101px] text-ijoTeal">
          <section className="w-[50px] h-[50px]">
            <button className="py-[15px] px-[21px] font-normal leading-[20.16px] justify-center hover:bg-ijoTeal border rounded-none border-ijoTeal hover:text-white">
              1
            </button>
          </section>
          <section className="w-[50px] h-[50px]">
            <button className="py-[15px] px-[21px] font-normal leading-[20.16px] justify-center hover:bg-ijoTeal border rounded-none border-ijoTeal hover:text-white">
              2
            </button>
          </section>
          <section className="w-[50px] h-[50px]">
            <button className="py-[15px] px-[21px] font-normal leading-[20.16px] justify-center hover:bg-ijoTeal border rounded-none border-ijoTeal hover:text-white">
              3
            </button>
          </section>
          <section className="w-[50px] h-[50px]">
            <button className="py-[15px] px-[21px] font-normal leading-[20.16px] justify-center hover:bg-ijoTeal border rounded-none border-ijoTeal hover:text-white">
              ...
            </button>
          </section>
          <section className="w-[136px] h-[50px]">
            <button className="py-[15px] px-[21px] font-normal leading-[20.16px] justify-center hover:bg-ijoTeal border rounded-none border-ijoTeal hover:text-white text-[16px]">
              Next &#129122;
            </button>
          </section>
        </nav>
      </div>
      <div title="Footer"></div>
    </>
  );
}
