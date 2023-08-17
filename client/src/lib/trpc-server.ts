import {initTRPC} from '@trpc/server';
import { z } from 'zod';
import path from "node:path";
import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import {ProtoGrpcType} from "@/proto/sys";
import {promisify} from "node:util";

const t = initTRPC.create();

interface User {
    id: string;
    name: string;
}
const userList: User[] = [
    {
        id: '1',
        name: 'KATT',
    },
    {
        id: '2',
        name: 'Foo',
    },
];

const PROTO_PATH = path.join(process.cwd(), '../server/sys/sys.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const { sysclient: {UserService} } = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

const service = new UserService("127.0.0.1:8080", grpc.credentials.createInsecure());

const login = promisify(service.Login).bind(service)

export const appRouter = t.router({
    userById: t.procedure
        .input(z.number())
        .query(async (req) => {
            const { input } = req;

            const res = await login({ username: 'admin', password: 'admin123' })

            return {
                user: userList.find((u) => parseInt(u.id) === input),
                data: res
            };
        }),
});

export type AppRouter = typeof appRouter;
