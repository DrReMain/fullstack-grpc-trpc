import path from 'node:path';
import {promisify} from 'node:util'
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from "@/proto/sys";

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

const Page = async () => {
    const res = await login({ username: 'admin', password: 'admin123' })

    return (
        <div className="min-h-screen">
            <table>
                <tbody>
                <tr>
                    <td>id:</td>
                    <td>{res?.id}</td>
                </tr>
                <tr>
                    <td>username:</td>
                    <td>{res?.username}</td>
                </tr>
                <tr>
                    <td>access_token:</td>
                    <td>{res?.access_token}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Page;
