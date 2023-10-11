import crypto from "crypto";
import Transfer from "./Transfer";
import Charge from "./Charge";
import Transactions from "./Transactions";
import Verify from "./Verify";

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

  constructor(key: string) {
    this.charge = new Charge(key);
    this.verify = new Verify(key);
    this.transfer = new Transfer(key);
    this.transaction = new Transactions(key);
  }

  static webHook =
    <R extends Req, U extends Res, N extends (...args: any[]) => any>(
      secret: string,
    ) =>
    (req: R, res: U, next?: N) => {
      try {
        const hash = crypto
          .createHmac("sha512", secret) //
          .update(JSON.stringify(req.body))
          .digest("hex");

        if (hash === req.headers["x-paystack-signature"]) {
          next && next();
          return;
        } else {
          res.sendStatus(401);
        }
      } catch (err) {
        res.sendStatus(400);
      }
    };
}
