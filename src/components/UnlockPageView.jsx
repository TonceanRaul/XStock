import React from "react";
import UnlockPage from "./UnlockPage";
import Header from "./Header";
import Section from "./Section";
import { logout } from "@multiversx/sdk-dapp/utils";
import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn";

const UnlockPageView = () => {
    const isLoggedIn = useGetIsLoggedIn();

    console.log("CEA" + isLoggedIn);
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="roadmap"
        >
            <Header></Header>
            <UnlockPage></UnlockPage>
        </Section>
    );
};

export default UnlockPageView;
