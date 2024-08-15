"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Images from "@/public/assets";
import { FaMoon, FaSun } from "react-icons/fa";
import Button from "./Button";
4;
type Props = {
  isMoblie: boolean;
  active: string;
  setactive: React.Dispatch<React.SetStateAction<string>>;
};
const MenuItems = ({ isMoblie, active, setactive }: Props) => {
  const generateLink = (index: number) => {
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/created-nfts";
      case 2:
        return "/my-nft";
      default:
        return "/";
    }
  };
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMoblie && "flex-col space-y-8 h-full"
      }`}
    >
      {["Explore NFTs", "Listed NFTs", "My NFTs"].map((item, index) => (
        <>
          <li
            key={index}
            onClick={() => {
              setactive(item);
            }}
            className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
              active === item
                ? "dark:text-white text-nft-black-1"
                : "dark:text-nft-gray-3 text-nft-gray-2"
            }`}
          >
            <Link href={generateLink(index)}>{item}</Link>
          </li>
        </>
      ))}
    </ul>
  );
};
const ButtonGroup = ({
  setactive,
  router,
}: {
  setactive: React.Dispatch<React.SetStateAction<string>>;
  router: any;
}) => {
  const hasConnected = false;
  return hasConnected ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setactive("");
        router.push("/create-nft");
      }}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setactive("");
        router.push("/create-nft");
      }}
    />
  );
};
const Navbar = () => {
  const router = useRouter();
  const [active, setactive] = useState("Explore NFTs");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href={"/"}>
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
            <Image
              src={Images.logo02}
              objectFit="contain"
              alt="logo"
              width={32}
              height={32}
              priority
              quality={100}
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1 max-sm:hidden">
              CryptoKet
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={Images.logo02}
              objectFit="contain"
              alt="logo"
              width={32}
              height={32}
              priority
              quality={100}
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl pl-1 relative label"
          >
            <FaSun className=" text-yellow-200 w-2.5 h-2.5" />
            <FaMoon className="text-red-300 pr-1 w-3 h-3" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        <div className="md:hidden flex">
          <MenuItems active={active} setactive={setactive} isMoblie={false} />
          <div className="ml-4">
            <ButtonGroup setactive={setactive} router={router} />
          </div>
        </div>
      </div>
      <div className="hidden md:flex ml-2">
        {!isOpen ? (
          <Image
            src={Images.menu}
            alt="menu"
            objectFit="contain"
            width={25}
            height={25}
            onClick={() => setIsOpen(true)}
            className={theme === "light" ? "filter invert" : ""}
          />
        ) : (
          <Image
            src={Images.cross}
            alt="cross"
            objectFit="contain"
            width={20}
            height={20}
            onClick={() => setIsOpen(false)}
            className={theme === "light" ? "filter invert" : ""}
          />
        )}
        {isOpen && (
          <div className="fixed nav-h inset-0 top-65 left-0 dark:bg-nft-dark bg-white  flex justify-between flex-col  z-10 ">
            <div className="flex-1 p-4">
              <MenuItems active={active} setactive={setactive} isMoblie />
            </div>
            <div className="p-4 border-t dark:border-ntf-black-1 border-nft-gray-1">
              <ButtonGroup setactive={setactive} router={router} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
