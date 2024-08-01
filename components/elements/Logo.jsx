"use client";
import React from "react";
import Image from "next/image";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
    const { push } = useRouter();
    const onClickLogo = () => {
        push("/");
        // Home으로 이동하는 로직
    };
    const onClickMenu = () => {};
    return (
        <section className="flex flex-row items-center gap-3 ">
            <IconButton
                onClickIcon={onClickMenu}
                icon={<RxHamburgerMenu size={24} />}
            />
            <div className="cursor-pointer " onClick={onClickLogo}>
                <Image
                    alt="logo "
                    width={100}
                    height={30}
                    src={"/main-logo.svg"}
                />
            </div>
        </section>
    );
};

export default Logo;
