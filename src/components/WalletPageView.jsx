import React from "react";
import WalletPage from "./WalletPage";
import Header from "./Header";
import Section from "./Section";

const WalletPageView = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="roadmap"
        >
            <Header></Header>
            <WalletPage></WalletPage>
        </Section>
    );
};

export default WalletPageView;
