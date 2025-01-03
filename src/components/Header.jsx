import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { xStock } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import SearchBar from "./SearchBar";
import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks";
import { logout } from "@multiversx/sdk-dapp/utils";

const Header = () => {
    const pathname = useLocation();
    const navigate = useNavigate();

    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    const isLoggedIn = useGetIsLoggedIn();
    console.log(isLoggedIn);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
                openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[8rem] xl:mr-8" href="/#home">
                    <div className="flex items-center">
                        <img src={xStock} width={90} height={40} alt="xStock" />
                        <span className="ml-2 text-sm">XStock</span>
                    </div>
                </a>
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-7 ${
                                    item.onlyMobile ? "lg-hidden" : ""
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } lg:leading-5 lg:hover:text-n-7 xl:px-12`}
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu></HamburgerMenu>
                </nav>
                <div className="flex flex-row items-center">
                    <SearchBar />
                    {isLoggedIn ? (
                        <Button
                            className="lg:flex hidden"
                            href="/"
                            onClick={() => logout()}
                        >
                            Log Out
                        </Button>
                    ) : (
                        <Button
                            className="lg:flex hidden"
                            onClick={() => navigate("unlock")}
                        >
                            Log In
                        </Button>
                    )}
                </div>
                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation}></MenuSvg>
                </Button>
            </div>
        </div>
    );
};

export default Header;
