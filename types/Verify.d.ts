import Requester from './Requester';
interface VerifyCard {
    bin: string;
}
declare type VerifyAccountNumber = {
    accountNumber: string;
    bankCode: string;
};
export default class Verify extends Requester {
    path: string;
    /**
     * This verifies if a card is valid using the first 6 digits of the card number
     * @param bin string
     */
    card(data: VerifyCard): Promise<Partial<{
        [key: string]: string | number;
        bin: string;
        brand: string;
        sub_brand: string;
        countryCode: string;
        countryName: string;
        cardType: string;
        bank: string;
        linkedBankId: number;
    }>>;
    /**
     * This verifies if an account number is valid given the bank code
     * @param accountNumber string
     * @param bankCode string
     */
    accountNumber(data: VerifyAccountNumber): Promise<Partial<{
        accountNumber: string;
        accountName: string;
    }>>;
}
export {};
