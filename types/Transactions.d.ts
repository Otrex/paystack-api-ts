import Requester from './Requester';
export interface TransactionData {
    email: string;
    amount: string;
}
export interface TransactionAuthorizationData extends TransactionData {
    authorizationCode: string;
    metadata?: Record<string, any>;
}
interface TransactionInitData extends TransactionData {
    metadata?: Record<string, any>;
}
interface TransactionInitResponse {
    authorizationUrl: string;
    accessCode: string;
    reference: string;
    metadata?: Record<string, any>;
}
declare type TransactionAuthCodeCharge = {
    amount: string;
    currency: string;
    transaction_date: Date;
    status: 'success' | 'failed';
    reference: string;
    [key: string]: any;
    authorization: {
        authorizationCode: string;
        bin: number;
        last4: string;
        expMonth: string;
        expYear: string;
        [key: string]: any;
    };
    customer: {
        [key: string]: any;
    };
};
export interface PaystackEventData {
    status: string;
    id: number;
    amount: number;
    channel: string;
    metadata: {
        transactionId: string;
        saveCard?: boolean;
        cardId?: boolean;
    };
    customer: {
        email: string;
    };
    authorization: {
        authorizationCode: string;
        bin: string;
        last4: string;
        expMonth: string;
        expYear: string;
        cardType: string;
        bank: string;
        countryCode: string;
        brand: string;
        accountName: string;
        signature: string;
        reusable: boolean;
    };
}
export interface PaystackEvent {
    event: string;
    data: PaystackEventData;
}
export default class Transactions extends Requester {
    path: string;
    /**
     * This checks if the authorizationCode is a valid one or if it can be charged
     * The input data would be in an object
     *
     * @param email string
     * @param amount string
     * @param authorizationCode string
     */
    chargeAuthorization(data: TransactionAuthorizationData): Promise<TransactionAuthCodeCharge>;
    /**
     * This checks if the authorizationCode is a valid one or if it can be charged
     * The input data would be in an object
     *
     * @param email string
     * @param amount string
     * @param authorizationCode string
     */
    checkAuthorization(data: TransactionAuthorizationData): Promise<Record<string, any>>;
    /**
     * This submits pin after the charge has been created succesfully
     * The input data would be in an object
     *
     * @param email string
     * @param amount string
     * @param metadata json Optional
     * @example { "email": "customer@email.com", "amount": "20000", metadata: { transactionId: "bla" } }
     */
    initialize(data: TransactionInitData): Promise<TransactionInitResponse>;
}
export {};
