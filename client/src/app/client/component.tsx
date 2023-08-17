'use client';

import {trpc} from "@/lib/trpc";

export default function MyRpcClientComponent(): JSX.Element {
    const {data} = trpc.userById.useQuery(1)

    if (!data) return (<p>no data</p>)

    return (
        <div>
            <p>Hello, {data.user?.name}, greetings from client component land!</p>
            <p>{data.data?.access_token}</p>
        </div>
    )
}
