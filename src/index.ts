import Charge from "./services/Charge";
import Api from "./core/api";
import Webhook from "./services/Webhook";
import Transaction from "./services/Transaction";

/**
 * Represents a Charge object for handling payment transactions.
 *
 * This class provides methods for creating and interacting with payment charges,
 * including submitting various types of data (e.g., PIN, phone, birthday, OTP) after
 * a charge has been successfully created.
 */
class PayStack {
  static webhook = Webhook;
  private api: Api;

  public charge: Charge;
  public transactions: Transaction;
  
  constructor(key: string) {
    this.api = new Api(key);

    this.charge = new Charge(this.api);
    this.transactions = new Transaction(this.api)
  }
}

export default PayStack;
exports.PayStack = PayStack;
