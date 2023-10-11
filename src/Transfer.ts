/* eslint-disable no-underscore-dangle */
import Requester from "./Requester";
import TransferReciepient from "./TransferReciepent";
import { IInitiateTransferResponse, InitiateTransferData } from "./types";

export default class Transfer extends Requester {
  path = "/transfer";

  private _reciepient: TransferReciepient;

  constructor(key: string) {
    super(key);
    this._reciepient = new TransferReciepient(key);
  }

  get reciepient() {
    return this._reciepient;
  }

  /**
   * This submits pin after the charge has been created succesfully
   * The input data would be in an object
   *
   * @param source string eg. "balance"
   * @param reason string
   * @param amount number
   * @param reciepient string eg. "RCP_gx2wn530m0i3w3m"
   */
  async initiate(data: InitiateTransferData) {
    const url = `${this.path}`;

    const result = await this.makeRequest({
      method: "POST",
      data,
      url,
    });

    return this.resolveResponse<IInitiateTransferResponse>(result);
  }
}
