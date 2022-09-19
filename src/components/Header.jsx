import React from "react";
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import {MdAddShoppingCart} from "react-icons/md";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { async } from "@firebase/util";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const firebaseAuth = getAuth (app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const login = async () => {
      const {user: {refreshToken, providerData}} = await signInWithPopup (firebaseAuth, provider)
      dispatch({
        type : actionType.SET_USER,
        user : providerData[0],
      });
  };
  return (
    <header className="fixed w-screen z-50 p-6 px-16">
    { /*desktop & tablet*/}
    <div className="hidden md:flex w-full h-full items-center justify-between">
      <Link to={"/"} className="flex items-center gap-2">
        <img src={Logo} className="w-10 object-cover" alt="logo"/>
        <p className="text-headingColor text-x1 font-bold"> FOOD HUNT</p>
      </Link>
      <div className="flex items-center gap-10">
      <ul className="flex items-center gap-10">
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
      </ul>
      <motion.div whileTap={{scale : 0.6}} className="relative flex items-center justify-center">
        <MdAddShoppingCart className="text-textcolor text-2xl cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
          <p className="text-xs text-white font-semibold">2</p>
        </div>
      </motion.div>
      <div className="relative">
      <motion.img whileTap={{scale : 0.6}} 
        src={user ? user.photoURL : Avatar} 
        className="w-5 min-w-[40px] h-5 min-h-[40px] drop-shadow-2xl cursor-pointer " 
        alt="userprofile"
        onClick={login}
      />
      </div>
      </div>
    </div>
    {/*mobile*/}
    <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
