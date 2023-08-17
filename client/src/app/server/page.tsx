import {appRouter} from '@/lib/trpc-server';

export default async function rscPage() {
    const caller = appRouter.createCaller({});
    const result = await caller.userById(2);

    return (
        <div>
            <p>Hi, {result?.user?.name}, greetings from RSC land!</p>

            <p>{result?.data?.access_token}</p>
        </div>
    )
}
