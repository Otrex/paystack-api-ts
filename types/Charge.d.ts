import Requester from './Requester';
import { ChargeCreationData, SubmitBirthdayData, SubmitOtpData, SubmitPhoneData, SubmitPinData } from './types';
export default class Charge extends Requester {
    path: string;
    /**
     * This submits pin after the charge has been created succesfully
     * The input data would be in an object
     *
     * @param email string
     * @param amount string
     * @param metadata string (Optional)
     * @param card object (Optional)
     * @param bank object (Optional)
     * @param authorizationCode string (Optional)
     */
    create(data: ChargeCreationData): Promise<Record<string, any>>;
    /**
     * This submits pin after the charge has been created succesfully.
     * The input data would be in an object
     *
     * @param pin string
     * @param reference string
     */
    submitPin(data: SubmitPinData): Promise<Record<string, any>>;
    /**
     * This submits pin after the charge has been created succesfully.
     * The input data would be in an object
     *
     * @param phone string
     * @param reference string
     */
    submitPhone(data: SubmitPhoneData): Promise<Record<string, any>>;
    /**
     * This submits pin after the charge has been created succesfully.
     * The input data would be in an object
     *
     * @param birthday string
     * @param reference string
     * @example { "birthday": "1961-09-21", "reference": "5bwib5v6anhe9xa" }
     */
    submitBirthday(data: SubmitBirthdayData): Promise<Record<string, any>>;
    /**
     * This submits pin after the charge has been created succesfully.
     * The input data would be in an object
     *
     * @param otp string
     * @param reference string
     */
    submitOtp(data: SubmitOtpData): Promise<Record<string, any>>;
}
/**
 * Test Cards: https://paystack.com/docs/payments/test-payments
 * APIs: https://paystack.com/docs/api
 */
