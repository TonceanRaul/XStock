import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
    const [activeSearch, setActiveSearch] = useState([]);

    const handleSearch = (e) => {
        if (e.target.value == "") {
            setActiveSearch([]);
            return false;
        }
    };

    return (
        <form className="w-[200px] relative mr-5">
            <div className="relative">
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full p-4 rounded-full bg-slate-800"
                    onChange={(e) => handleSearch(e)}
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full">
                    <AiOutlineSearch />
                </button>
            </div>

            {activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {activeSearch.map((s) => (
                        <span>{s}</span>
                    ))}
                </div>
            )}
        </form>
    );
};

export default Searchbar;
