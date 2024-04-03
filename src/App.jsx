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

import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Routes>
                <Route path="/" element={<RegularView />} />
                <Route path="/home" element={<RegularView />} />
                <Route
                    path="/terms-and-services"
                    element={<TermsAndServicesView />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
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
            </Routes>
        </div>
    );
};

const RegularView = () => {
    return (
        <>
            <Header />
            <Hero />
            <Benefits />
            <Collaboration />
            <Roadmap />
            <Footer />
            <ButtonGradient></ButtonGradient>
        </>
    );
};

export default App;
