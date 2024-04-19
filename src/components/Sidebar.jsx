import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { socialMedia } from "../constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
    <div
        className={`w-[48px] h-[48px] rounded-[10px] ${
            isActive && isActive === name && "bg-[#2c2f32]"
        } flex justify-center items-center ${
            !disabled && "cursor-pointer"
        } ${styles}`}
        onClick={handleClick}
    >
        {!isActive ? (
            <div className="flex flex-row">
                <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2"></img>{" "}
                <p>asdasd</p>
            </div>
        ) : (
            <div>
                <img
                    src={imgUrl}
                    alt="fund_logo"
                    className={`w-1/2 h-1/2 ${
                        isActive !== name && "grayscale"
                    }`}
                ></img>
                <p>asdasd</p>
            </div>
        )}
    </div>
);

const Sidebar = () => {
    return (
        <div className="flex flex-col sticky top-5 h-[93vh]">
            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[126px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {socialMedia.map((item) => (
                        <div className="flex items-center justify-center">
                            <Icon key={item.id} imgUrl={item.iconUrl}></Icon>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
