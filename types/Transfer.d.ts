import Requester from './Requester';
import TransferReciepient from './TransferReciepent';
import { IInitiateTransferResponse, InitiateTransferData } from './types';
export default class Transfer extends Requester {
    path: string;
    private _reciepient;
    constructor(key: string);
    get reciepient(): TransferReciepient;
    /**
     * This submits pin after the charge has been created succesfully
     * The input data would be in an object
     *
     * @param source string eg. "balance"
     * @param reason string
     * @param amount number
     * @param reciepient string eg. "RCP_gx2wn530m0i3w3m"
     */
    initiate(data: InitiateTransferData): Promise<IInitiateTransferResponse>;
}
