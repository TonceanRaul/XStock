import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import TermsAndServicesView from "./components/TermsAndServices";
import PrivacyPolicyView from "./components/PrivacyPolicy";
import TermsAndConditionsView from "./components/TermsAndConditions";
import HelpCenterView from "./components/HelpCenter";
import SuggestionsView from "./components/Suggestions";
import BlogView from "./components/Blog";
import NewslettersView from "./components/Newsletters";
import OurPartnerView from "./components/OurPartner";
import BecomePartnerView from "./components/BecomePartner";
//import Sidebar from "./components/Sidebar";
import UnlockPageView from "./components/UnlockPageView";
import WalletPageView from "./components/WalletPageView";

import { Route, Routes } from "react-router-dom";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers";
import { ENVIRONMENT, walletConnectV2ProjectId } from "./config/config.devnet";

const App = () => {
    return (
        <DappProvider
            environment={ENVIRONMENT}
            customNetworkConfig={{
                name: "customConfig",
                walletConnectV2ProjectId,
            }}
        >
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Routes>
                    <Route path="/" element={<RegularView />} />
                    <Route path="/home" element={<RegularView />} />
                    <Route
                        path="/terms-and-services"
                        element={<TermsAndServicesView />}
                    />
                    <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicyView />}
                    />
                    <Route
                        path="/terms-of-use"
                        element={<TermsAndConditionsView />}
                    />
                    <Route path="/help-center" element={<HelpCenterView />} />
                    <Route path="/suggestions" element={<SuggestionsView />} />
                    <Route path="/blog" element={<BlogView />} />
                    <Route path="/newsletters" element={<NewslettersView />} />
                    <Route path="/our-partner" element={<OurPartnerView />} />
                    <Route
                        path="/become-a-partner"
                        element={<BecomePartnerView />}
                    />
                    <Route path="/unlock" element={<UnlockPageView />} />
                    <Route path="/wallet" element={<WalletPageView />} />
                </Routes>
            </div>
        </DappProvider>
    );
};

export const RegularView = () => {
    return (
        <div className="flex">
            {/* <div className="w-1/12">
                <Sidebar />
            </div> */}
            <div className="flex-1">
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Roadmap />
                <Footer />
                <ButtonGradient />
            </div>
        </div>
    );
};

// <div className="flex flex-col">
//     <Sidebar></Sidebar>
//     <div className="flex flex-col">
//         <Header />
//         <Hero />
//         <Benefits />
//         <Collaboration />
//         <Roadmap />
//         <Footer />
//         <ButtonGradient></ButtonGradient>
//     </div>
// </div>

export default App;
