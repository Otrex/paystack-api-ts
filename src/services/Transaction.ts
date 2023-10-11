import Api from "../core/api";
import { TransactionInitData, TransactionInitResponse } from "../types";

export default class Transaction {
  private basePath = "/transaction";
  constructor(private api: Api) {}

  /**
   * This submits pin after the charge has been created succesfully
   * The input data would be in an object
   *
   * @param email string
   * @param amount string
   * @param metadata json Optional
   * @example { "email": "customer@email.com", "amount": "20000", metadata: { transactionId: "bla" } }
   */
  async initialize(data: TransactionInitData) {
    const url = `${this.basePath}/initialize`;

    return this.api.request<TransactionInitResponse>({
      method: "post",
      data,
      url,
    });
  }
}