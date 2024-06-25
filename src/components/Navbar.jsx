import { useState } from 'react';
import MangStore from "../assets/icon/logo-mangstore.svg";

export default function Navbar() {
  // State untuk menyimpan item-item yang dipilih oleh pengguna
  const [cartItems, setCartItems] = useState([]);

  // Fungsi untuk menambahkan item ke keranjang
  const addToCart = () => {
    // Misalnya, Anda dapat menambahkan item dummy untuk demonstrasi
    const newItem = {
      id: Math.random(), // ID sementara (untuk demonstrasi)
      name: 'Product Name', // Ganti dengan nama produk sesuai kebutuhan
      price: 10, // Ganti dengan harga produk sesuai kebutuhan
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <main className='w-full h-[100px] fixed backdrop-blur-3xl z-[1]'>
        <nav className=''>
        <div className="lg:px-[120px] px-6 container mx-auto flex justify-between">
          {/* home, product, */}
          <div className="pt-[40px]">
            <ul className='gap-5 flex'>
              <li><a href="/" className="text-ijoTeal">Home</a></li>
              <li><a href="/Product" className="text-ijoTeal">Product</a></li>
              <li><a href="/blog" className="text-ijoTeal">Blog</a></li>
            </ul>
          </div>

          {/* logo */}
          <div className="flex lg:items-center mt-8">
            <img src={MangStore} alt="MangStore" />
          </div>

          {/* search, cart, contact */}
          <div className="flex mt-8 gap-5 lg:items-center">
            <button onClick={addToCart}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ijoTeal">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <button type="button">
              <a href="#Cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-ijoTeal">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </a>
            </button>

            <a href="#contact-us" className="text-ijoTeal w-[109px] h-[40px] rounded-[100px] px-4 py-2 text-[14px] font-bold leading-[17.64px] pt-3">Contact Us</a>
          </div>
        </div>
        </nav>
      </main>
    </>
  );
}
