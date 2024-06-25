import IconWhatsApp from '../assets/icon/wa.svg';
import IconInstagram from '../assets/icon/ig.svg';
import IconLinkedIn from '../assets/icon/linkedin.svg'
import IconTwitter from '../assets/icon/twiter.svg'
import LogoMangstore from '../assets/icon/logo-mangstore-white.svg'

const Footer = () => {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[308px] gap-10 text-white bg-ijoTeal mt-[101px] mx-auto">
                <section className="w-full max-w-[1100px] h-[180px] gap-24 mb-[74px] ml-[178px] flex justify-between pt-[54px]">
                    {/* Mangstore Logo */}
                    <nav className="flex flex-col justify-between">
                        <img className="w-[141px] h-[40px] object-contain" src={LogoMangstore} alt="Mangstore Logo" />
                        <p className="w-[367px] font-normal text-[16px] leading-[28px] mt-[24px]">Mangstore is the solution for high quality goods you need</p>
                        <div className="flex mt-[26px] gap-2">
                            <a href=""><img className="w-[24px] h-[24px] object-contain cursor-pointer" src={IconInstagram} alt="Instagram Icon" /></a>
                            <a href=""><img className="w-[24px] h-[24px] object-contain cursor-pointer" src={IconWhatsApp} alt="WhatsApp Icon" /></a>
                            <a href=""><img className="w-[24px] h-[24px] object-contain cursor-pointer" src={IconLinkedIn} alt="LinkedIn Icon" /></a>
                            <a href=""><img className="w-[24px] h-[24px] object-contain cursor-pointer" src={IconTwitter} alt="Twitter Icon" /></a>
                        </div>
                    </nav>
                    {/* Mangstore, Buy, Find Us In */}
                    <nav className="flex">
                        {/* Mangstore */}
                        <div className="flex flex-col">
                            <h1 className="font-bold text-[16px] leading-[21.33px]">Mangstore</h1>
                            <ul className="mt-[16px] space-y-1 cursor-pointer font-normal text-[14px] leading-[16.8px]">
                            <li className="hover:text-teal-600"><a href="">About Mangstore</a></li>
                            <li className="hover:text-teal-600"><a href="">Home</a></li>
                            <li className="hover:text-teal-600"><a href="">Product</a></li>
                            <li className="hover:text-teal-600"><a href="">Blog</a></li>
                            </ul>
                        </div>
                        {/* Buy */}
                        <div className="flex flex-col ml-[50px]">
                            <h1 className="font-bold text-[16px] leading-[21.33px]">Buy</h1>
                            <ul className="mt-[16px] space-y-1 cursor-pointer font-normal text-[14px] leading-[16.8px]">
                            <li className="hover:text-teal-600"><a href="">Mens Wear</a></li>
                            <li className="hover:text-teal-600"><a href="">Womans Wear</a></li>
                            <li className="hover:text-teal-600"><a href="">Kids Wear</a></li>
                            <li className="hover:text-teal-600"><a href="">Sport Wear</a></li>
                            <li className="hover:text-teal-600"><a href="">Shoes</a></li>
                            <li className="hover:text-teal-600"><a href="">Head Wear</a></li>
                            </ul>
                        </div>
                        {/* Find Us In */}
                        <div className="flex flex-col ml-[50px]">
                            <h1 className="font-bold text-[16px] leading-[21.33px]">Find Us In</h1>
                            <div className="mt-[16px] space-y-1 grid=rows-2 grid">
                                <button className="w-[150px] h-[50px] border rounded-[100px] p-[10px] bg-white hover:bg-ijoTeal hover:text-white text-ijoTeal">Tokopedia &#129122;</button>
                                <button className="w-[150px] h-[50px] border rounded-[100px] mt-[8px] p-[10px] hover:bg-ijoTeal hover:text-white bg-white text-ijoTeal">Shopee &#129122;</button>
                            </div>
                        </div>
                    </nav>
                </section>
                <p className='text-center'>&copy; 2024 Mangcoding All Rights Reserves</p>
            </div>
        </>
    )
}

export default Footer;
