import Transfer from './Transfer';
import Charge from './Charge';
import Transactions from './Transactions';
import Verify from './Verify';
export interface Req {
    headers: Record<string, any>;
    body: any;
    [key: string]: any;
}
export interface Res {
    sendStatus: (code: number | string) => any;
    [key: string]: any;
}
export default class PayStack {
    charge: Charge;
    transfer: Transfer;
    transaction: Transactions;
    verify: Verify;
    constructor(key: string);
    static webHook: <R extends Req, U extends Res, N extends unknown>(secret: string) => (req: R, res: U, next?: N | undefined) => void;
}
