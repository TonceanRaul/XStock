import React from "react";
import {
    useGetAccountInfo,
    useGetNetworkConfig,
} from "@multiversx/sdk-dapp/hooks";

import { FormatAmount, Trim } from "@multiversx/sdk-dapp/UI";
import { CopyButton } from "@multiversx/sdk-dapp/UI/CopyButton";

const WalletPage = () => {
    const { network } = useGetNetworkConfig();
    const { account } = useGetAccountInfo();

    return (
        <div className="text-lg mt-32 mb-16 flex flex-col items-center justify-center">
            <div className="text-left">
                <span className="mx-8 text-white">Balance:</span>
                <FormatAmount
                    value={account.balance}
                    egldLabel={network.egldLabel}
                />
            </div>
            <div className="flex items-center justify-center text-left text-white">
                <span className="mx-8">Address:</span>
                <div className="flex justify-center items-center">
                    <Trim
                        className="flex items-center justify-center text-white"
                        text={account.address}
                    />
                    <CopyButton
                        className="flex items-center mx-4 text-xs"
                        text={account.address}
                    />
                </div>
            </div>
        </div>
    );
};

export default WalletPage;
