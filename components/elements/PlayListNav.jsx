"use client";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({ playlist }) => {
    const { id, owner, playlistName, songList } = playlist;
    const onClickPlay = () => {
        // ToDO Play Music
    };
    return (
        <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group">
            <div>
                <div className="text-[14px]">{playlistName}</div>
                <div className="text-[12px] text-neutral-500">{owner}</div>
            </div>
            <div>
                <div className="hidden group-hover:block">
                    <IoMdPlayCircle size={24} />
                </div>
            </div>
        </li>
    );
};

export default PlayListNav;
