import {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton,
} from "@multiversx/sdk-dapp/UI";
import { useNavigate } from "react-router-dom";

const UnlockPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center pt-20 h-screen">
            <h2>Login with:</h2>
            <div className="flex flex-wrap">
                <ExtensionLoginButton
                    loginButtonText="DeFi Wallet"
                    callbackRoute="/wallet"
                    onLoginRedirect={() => navigate("/wallet")}
                />
                <WebWalletLoginButton
                    loginButtonText={"Web Wallet"}
                    callbackRoute="/wallet"
                />
                <LedgerLoginButton
                    loginButtonText="Ledger"
                    callbackRoute="/wallet"
                />
                <WalletConnectLoginButton
                    loginButtonText="xPortal App"
                    callbackRoute="/wallet"
                />
            </div>
        </div>
    );
};

export default UnlockPage;
