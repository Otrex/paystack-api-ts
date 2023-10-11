import crypto from "crypto";
export interface Req {
  headers: Record<string, any>;
  body: any;
  [key: string]: any;
}

export interface Res {
  sendStatus: (code: number | string) => any;
  [key: string]: any;
}

export default class Webhook {
  static handler =
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
