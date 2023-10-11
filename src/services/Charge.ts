import Api from "../core/api";
import {
  ChargeCreationData,
  SubmitBirthdayData,
  SubmitOtpData,
  SubmitPhoneData,
  SubmitPinData,
} from "../types";

export default class Charge {
  private basePath = "/charge";
  constructor(private api: Api) {}

  /**
   * This submits pin after the charge has been created successfully
   * The input data would be in an object
   *
   * @param email string
   * @param amount string
   * @param metadata string (Optional)
   * @param card object (Optional)
   * @param bank object (Optional)
   * @param authorizationCode string (Optional)
   */
  async create(data: ChargeCreationData) {
    const url =
      "authorizationCode" in data
        ? `/transaction${this.basePath}_authorization`
        : this.basePath;

    return this.api.request({
      method: "post",
      data,
      url,
    });
  }

  /**
   * This submits pin after the charge has been created successfully.
   * The input data would be in an object
   *
   * @param pin string
   * @param reference string
   */
  async submitPin(data: SubmitPinData) {
    const url = `${this.basePath}/submit_pin`;

    return this.api.request({
      method: "POST",
      data,
      url,
    });
  }

  /**
   * This submits pin after the charge has been created successfully.
   * The input data would be in an object
   *
   * @param phone string
   * @param reference string
   */
  async submitPhone(data: SubmitPhoneData) {
    const url = `${this.basePath}/submit_phone`;

    return this.api.request({
      method: "POST",
      data,
      url,
    });
  }

  /**
   * This submits pin after the charge has been created successfully.
   * The input data would be in an object
   *
   * @param birthday string
   * @param reference string
   * @example { "birthday": "1961-09-21", "reference": "5bwib5v6anhe9xa" }
   */
  async submitBirthday(data: SubmitBirthdayData) {
    const url = `${this.basePath}/submit_birthday`;

    return this.api.request({
      method: "POST",
      data,
      url,
    });
  }

  /**
   * This submits pin after the charge has been created successfully.
   * The input data would be in an object
   *
   * @param otp string
   * @param reference string
   */
  async submitOtp(data: SubmitOtpData) {
    const url = `${this.basePath}/submit_otp`;

    return this.api.request({
      method: "POST",
      data,
      url,
    });
  }
}
