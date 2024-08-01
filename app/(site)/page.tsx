import React from "react";
import { sleep } from "@/utils";

const page = async () => {
    console.log("before RootLayout sleep...");
    await sleep(4000);
    console.log("after RootLayout sleep...");
    return <div>HomePage</div>;
};

export default page;
