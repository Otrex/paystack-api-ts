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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TransactionInitResponse {
  authorizationUrl: string;
  accessCode: string;
  reference: string;
  metadata?: Record<string, any>;
}

type TransactionAuthCodeCharge = {
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
  metadata: { transactionId: string; saveCard?: boolean; cardId?: boolean };
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
  path = '/transaction';

  /**
   * This checks if the authorizationCode is a valid one or if it can be charged
   * The input data would be in an object
   *
   * @param email string
   * @param amount string
   * @param authorizationCode string
   */

  async chargeAuthorization(data: TransactionAuthorizationData) {
    const url = `${this.path}/charge_authorization`;

    const result = await this.makeRequest({
      method: 'POST',
      data,
      url,
    });

    return this.resolveResponse<TransactionAuthCodeCharge>(result);
  }

  /**
   * This checks if the authorizationCode is a valid one or if it can be charged
   * The input data would be in an object
   *
   * @param email string
   * @param amount string
   * @param authorizationCode string
   */

  async checkAuthorization(data: TransactionAuthorizationData) {
    const url = `${this.path}/check_authorization`;

    const result = await this.makeRequest({
      method: 'POST',
      data,
      url,
    });

    return this.resolveResponse(result);
  }

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
    const url = `${this.path}/initialize`;

    const result = await this.makeRequest({
      method: 'POST',
      data,
      url,
    });

    return this.resolveResponse<TransactionInitResponse>(result);
  }
}
