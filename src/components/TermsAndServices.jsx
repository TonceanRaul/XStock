import React from "react";
import Header from "./Header";
import ButtonGradient from "../assets/svg/ButtonGradient";

const TermsAndServices = () => {
    return (
        <div id="terms-and-services" className="container mx-auto mt-10 px-4">
            <p className="flex items-center justify-center font-semibold text-4xl">
                Terms & Services
            </p>
            <br></br>
            <p className="text-lg leading-7">
                Welcome to XStock, the crowdsourcing platform that connects
                Producers and Checkers with clients looking to validate specific
                tasks. These User General Conditions (UGC) define for Producers
                and Checkers the rights, duties, and conditions of use of
                XStock. By accessing and using our platform, you fully and
                unreservedly accept these UGCs.
            </p>
            <br></br>
            <p className="text-lg leading-7 font-semibold">
                If you interact with XStock via email or online form
            </p>
            <br></br>
            <p className="text-lg leading-7">
                Welcome to XStock, the crowdsourcing platform that connects
                Producers and Checkers with clients looking to validate specific
                tasks. These User General Conditions (UGC) define for Producers
                and Checkers the rights, duties, and conditions of use of
                XStock. By accessing and using our platform, you fully and
                unreservedly accept these UGCs.
            </p>
            <br></br>
            <p className="text-lg leading-7 font-semibold">
                Children's Privacy
            </p>
            <br></br>
            <p className="text-lg leading-7">
                Welcome to XStock, the crowdsourcing platform that connects
                Producers and Checkers with clients looking to validate specific
                tasks. These User General Conditions (UGC) define for Producers
                and Checkers the rights, duties, and conditions of use of
                XStock. By accessing and using our platform, you fully and
                unreservedly accept these UGCs.
            </p>
            <br></br>
            <p className="text-lg leading-7 font-semibold">
                Children's Privacy
            </p>
            <br></br>

            <p>
                XStock's services are not directed to persons under the age of
                18. We do not knowingly collect personally identifiable
                information from children under the age of 18. In the event that
                we discover that a child under the age of 18 has provided us
                with personal information, we will immediately delete it from
                our servers. If you are a parent or guardian and you are aware
                that your child has provided us with personal information,
                please contact us so that we can take the necessary action.
            </p>
            <p className="text-lg leading-7 font-semibold">Your rights</p>
            <br></br>
            <p className="text-lg leading-7 font-semibold">
                Children's Privacy
            </p>
            <br></br>
            <p className="text-lg leading-7 font-semibold">Contact</p>
            <p>
                For more information or to request to exercise your rights,
                please contact the Privacy Team at contact@xstock.com.{" "}
            </p>
        </div>
    );
};

export const TermsAndServicesView = () => {
    return (
        <>
            <Header />
            <TermsAndServices />
            <ButtonGradient></ButtonGradient>
        </>
    );
};

export default TermsAndServicesView;
