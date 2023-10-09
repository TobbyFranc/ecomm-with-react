import React, {useState} from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import cartImg from "../Assets/icon-cart.svg";
import navAvatar from "../Assets/image-avatar.png";
import prodOneThumb from "../Assets/image-product-1-thumbnail.jpg";
import prodTwoThumb from "../Assets/image-product-2-thumbnail.jpg";
import prodThreeThumb from "../Assets/image-product-3-thumbnail.jpg";
import prodFourThumb from "../Assets/image-product-4-thumbnail.jpg";
import delIcon from "../Assets/icon-delete.svg";
import closeIcon from '../Assets/icon-close.svg'
import prodOneJpeg from "../Assets/image-product-1.jpg";
import cartBtn from "../Assets/icon-cart.svg";
import cartPlus from "../Assets/icon-plus.svg";
import cartMinus from "../Assets/icon-minus.svg";
import prodTwoJpeg from '../Assets/image-product-2.jpg'
import prodThreeJpeg from '../Assets/image-product-3.jpg'
import logo from '../Assets/logo.svg'
import prevIcon from '../Assets/icon-previous.svg'
import nextIcon from '../Assets/icon-next.svg'

// import prodFourJpeg from '../Assets/image-product-4.jpg'

const Home = () => {
  // Hamburger Menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Cart Display
  const [cart, setCart] = useState(false);
  const cartCheck = () => setCart(!cart);

  // HEEERO

  // Item increament to cart
  const [count, setCount] = useState(0);
  const itemsCartIncrease = () => {
    count < 10 ? setCount(count + 1) : setCount(10);
  };

  // Item decreament to cart
  const itemsCartDecrease = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

    //   Items Delete
    const itemsCartDelete =() => setCount(0);

    const slider = [
        "{prodOneJpeg}",
        {prodTwoJpeg},
        {prodThreeJpeg},
        // {prodFourJpeg},
    ];

    const [closePop, setClosePop] = useState(false)
    const cancelPop = () => setClosePop(!closePop)

  return (
    <div className="">
      <div className="w-screen h-[80px] items-center bg-white mb-8 fixed top-0 left-0">
        <div className="relative container mx-auto border-b-2 flex justify-between items-center w-full h-full">
          <div
            className={
              !cart
                ? "hidden"
                : "absolute top-[80px] md:right-[12px] shadow-2xl w-full md:w-[300px] h-[200px] bg-white ga rounded-md"
            }
          >
            <div className="border-b-2">
              <p className="p-2 text-md font-bold ">Cart</p>
            </div>
            <div className= {!count ? 'hidden' : "p-4"}>
              <div className="flex justify-between items-center">
                <img src={prodOneThumb} alt="" className="w-10 rounded-md" />
                <div className="">
                  <p className="text-sm text-slate-600">
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="text-sm text-slate-600">
                    $125.00 x {count}{" "}
                    <span className="text-md font-bold">${count * 125}.00</span>{" "}
                  </p>
                </div>
                <img className="cursor-pointer" src={delIcon} alt="" onClick={itemsCartDelete} />
              </div>
              <button className="bg-orange-400 text-white py-2 px-4 w-full rounded-md mt-4 hover:bg-opacity-80">
                Checkout
              </button>
            </div>
            <div className=" flex items-center w-[80%] h-[80%] mx-auto justify-center">
            <p className={!count ? 'font-bold text-slate-400' : 'hidden'}>Your cart is empty.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="md:hidden z-20 px-4" onClick={handleClick}>
              {!nav ? (
                <MenuIcon className="w-5" />
              ) : (
                <XIcon className="w-5 my-12" />
              )}
            </div>
            <div className=" cursor-pointer text-3xl font-bold font-['Kumbh Sans'] mr-6">
              {/* <h1>sneakers</h1> */}
              <img src={logo} alt="" />
            </div>
            <ul className="hidden h-[80px] items-center md:flex">
              <li className="navList  h-full flex items-center mx-4 px-2 cursor-pointer">
                Collections <span></span>{" "}
              </li>
              <li className="navList  h-full flex items-center mx-4 px-2 cursor-pointer">
                Men <span></span>
              </li>
              <li className="navList  h-full flex items-center mx-4 px-2 cursor-pointer">
                Women <span></span>
              </li>
              <li className="navList  h-full flex items-center mx-4 px-2 cursor-pointer">
                About <span></span>
              </li>
              <li className="navList  h-full flex items-center mx-4 px-2 cursor-pointer">
                Contact <span></span>
              </li>
            </ul>
          </div>
          <div className="items-center cursor-pointer flex">
            <div className="mr-8 relative" onClick={cartCheck}>
              <img src={cartImg} alt="" />
              <span className="absolute -top-4 -right-4 w-5 h-5 rounded-2xl text-[10px] grid place-content-center text-white bg-red-400">
                {count}
              </span>
            </div>
            <div className="navAva w-10 border-2 cursor-pointer rounded-3xl hover:border-orange-400">
              <img
                src={navAvatar}
                alt="user"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div
          className={
            !nav ? "hidden" : "flex absolute top-0 z-10 w-screen h-screen"
          }
        >
          <div className=" p-8 w-[60%] h-screen bg-white shadow-lg">
            <ul className="mt-8">
              <li className="cursor-pointer mt-6 font-bold">
                Collections <span></span>{" "}
              </li>
              <li className="cursor-pointer mt-6 font-bold">
                Men <span></span>
              </li>
              <li className="cursor-pointer mt-6 font-bold">
                Women <span></span>
              </li>
              <li className="cursor-pointer mt-6 font-bold">
                About <span></span>
              </li>
              <li className="cursor-pointer mt-6 font-bold">
                Contact <span></span>
              </li>
            </ul>
          </div>
          <div className="w-[40%] h-screen bg-black opacity-80 "></div>
        </div>
      </div>
      {/* NAVBAR HEADER */}
      {/* HEEEROOO */}
      <div className="container max-w-[1040px] h-full mt-20 md:mt-[120px] mx-auto grid place-content-center gap-8 md:grid-cols-2">
        <div className="">
            <div className=" md:w-[80%] flex flex-col gap-6">
                <img
                  className="md:rounded-2xl"
                  src={prodOneJpeg}
                  alt="product images"
                />
                <div className="flex justify-between items-center px-4" onClick={cancelPop}>
                    <div className=" w-1/5 rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                        <img
                        className="w-full"
                        src={prodOneThumb}
                        alt=""
                        />
                    </div>
                    <div className="group w-1/5 rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                        <img
                        className="w-full"
                        src={prodTwoThumb}
                        alt=""
                        />
                    </div>
                    <div className="group w-1/5 rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                        <img
                        className="w-full"
                        src={prodThreeThumb}
                        alt=""
                        />
                    </div>
                    <div className="group w-1/5 rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                        <img
                          className="w-full"
                          src={prodFourThumb}
                          alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="grid place-content-center px-4 md:px-0 md:w-[80%]">
          <p className="text-md md:text-sm text-orange-400 font-bold ">
            SNEAKER COMPANY
          </p>
          <h2 className="text-4xl md:py-4 mb-2 font-bold ">
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-md  text-gray-400 py-2">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between space-y-1 md:flex-col">
            <div className="flex">
              <p className="mr-4 text-xl font-bold">$125.00</p>
              <div className=" px-[6px] bg-orange-200 rounded-md bg-opacity-30 flex align-middle items-center">
                <p className="text-orange-400 font-bold text-sm">50%</p>
              </div>
            </div>
            <p className="text-gray-400 line-through font-bold text-sm ">
              $250.00
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 mt-8 md:flex-row">
            <div className="hover:bg-opacity-80 md:w-[40%] px-4 py-2 flex justify-around items-center text-xl font-bold bg-gray-200 rounded-md">
              <button className="text-orange-400" onClick={itemsCartDecrease}>
                <img src={cartMinus} alt="" />
              </button>
              <p>{count}</p>
              <button className="text-orange-400" onClick={itemsCartIncrease}>
                <img src={cartPlus} alt="" />
              </button>
            </div>
            <button className="hover:bg-opacity-80 md:w-[60%] mb-6 flex items-center justify-center rounded-md text-[#fff] font-[400] space-x-4 md:mb-0 bg-orange-400 px-4 py-2 hover:shadow-b-xl">
              <img src={cartBtn} alt="" className="w-4" />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
      {/* HEEEERO */}

      {/* IMAGE POP-UP PROJECTION */}
        <div className={closePop ? "hidden absolute top-0 left-0 w-full h-full md:flex justify-center items-center bg-black/80" : 'hidden'}>
            <div className="grid place-content-center max-w-md p-2 gap-4 space-y-8">
                <div className="flex flex-col gap-4 justify-between items-center">
                    <div className="flex items-end flex-col gap-4" >
                        <img src={closeIcon} alt="" className=" items-end cursor-pointer" onClick={cancelPop}/>
                        <div className="relative">
                            <img src={prodOneJpeg} alt="" className=" rounded-xl"/>
                            <img src={prevIcon} alt="" className="bg-white rounded-[50%] p-2 absolute top-[50%] -left-4  cursor-pointer border-2 hover:border-orange-400"/>
                            <img src={nextIcon} alt="" className="bg-white rounded-[50%] p-2 absolute top-[50%] -right-4 cursor-pointer border-2 hover:border-orange-400 "/>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="w-1/5 group relative rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                            <img
                                className="w-full"
                                src={prodOneThumb}
                                alt=""
                            />
                            <span className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-white/40 "></span>
                        </div>
                        <div className="w-1/5 group relative rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                            <img
                                className="w-full"
                                src={prodTwoThumb}
                                alt=""
                            />
                            <span className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-white/40 "></span>
                        </div>
                        <div className="w-1/5 group relative rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                            <img
                                className="w-full"
                                src={prodThreeThumb}
                                alt=""
                            />
                            <span className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-white/40 "></span>
                        </div>
                        <div className="w-1/5 group relative rounded-xl border-2 hover:border-orange-400 overflow-hidden cursor-pointer">
                            <img
                                className="w-full"
                                src={prodFourThumb}
                                alt=""
                            />
                            <span className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-white/40 "></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* IMAGE POP-UP PROJECTION */}
    </div>
  );
};

export default Home;
