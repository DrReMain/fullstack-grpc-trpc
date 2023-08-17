import {FC, PropsWithChildren} from "react";

import TrpcProvider from "@/providers/trpc-provider";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <TrpcProvider>
            {children}
        </TrpcProvider>
    );
};

export default Providers;
