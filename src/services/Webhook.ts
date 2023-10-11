import crypto from "crypto";
import { Req, Res } from "../types";

export default class Webhook {
  constructor(private secret: string){}

  handler<R extends Req, U extends Res, N extends (...args: any[]) => any>(req: R, res: U, next?: N) {
    try {
      const hash = crypto
        .createHmac("sha512", this.secret) //
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
  }
}
