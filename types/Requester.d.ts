import { Method } from 'axios';
declare type RequestParams = {
    url: string;
    method: Method;
    data: any;
};
interface PaystackResponse {
    status: boolean;
    message: string;
    data: any;
}
export default class Requester {
    private key?;
    protected path: string | undefined;
    contentType: undefined;
    baseUrl: string;
    constructor(key?: string | undefined);
    resolveResponse<T extends Record<string, any>>(result: PaystackResponse): T;
    makeRequest({ url, method, data }: RequestParams): Promise<any>;
}
export {};
