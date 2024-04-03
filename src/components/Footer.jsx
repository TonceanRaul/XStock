import React from "react";
import Section from "./Section";
import { footerLinks, socialMedia } from "../constants";
import { xStock } from "../assets";
import { useNavigation } from "react-router-dom";

const Footer = () => {
    return (
        <Section
            className="pt-[8rem] -mt-[2.25rem]"
            crosses
            crossesOffset="lg:translate-y-[6.25rem]"
            customPaddings
            id="footer"
        >
            <div
                className={`ml-15 flex justify-center items-center md:flex-row flex-col mb-8 w-full`}
            >
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img
                        src={xStock}
                        alt="xStock"
                        className="w-[266px] h-[72px] object-contain"
                    />
                    <p
                        className={`text-[18px] leading-[30.8px] mt-4 max-w-[310px]`}
                    >
                        Unlock Creativity with Every Block: XStock, Your Canvas
                        Awaits!
                    </p>
                </div>
                <div className="container flex-[2.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink, index) => (
                        <div
                            key={index}
                            className="text-white flex flex-col ss:my-0 my-4 min-w-[200px] md:min-w-[250px] mx-2"
                        >
                            <h4 className="font-semibold text-[18px] leading-[27px] text-white">
                                {footerLink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={index}
                                        className={`font-extralight text-[16px] leading-[24px] text-dimWhite hover:text-color-7 ${
                                            index !==
                                            footerLink.links.length - 1
                                                ? "mb-4"
                                                : "mb-0"
                                        }`}
                                    >
                                        <a href={link.href} target="_self">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mb-10">
                <p className="ml-12 mb-4 text-center text-[18px] leading-[27px] text-white">
                    © 2024 Copyright XStock All Rights Reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6 mr-24 ml-24">
                    {socialMedia.map((social, index) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`cursor-pointer ${
                                index !== socialMedia.length - 1
                                    ? "mr-6"
                                    : "mr-0"
                            }`}
                        >
                            <img
                                src={social.iconUrl}
                                alt={social.id}
                                className="w-[21px] h-[21px] object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Footer;
