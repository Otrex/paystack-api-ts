import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import { ServiceError } from "../errors";

interface PaystackResponse {
  status: boolean; // Only true if the details provided could be processed and no error occured while processing
  message: string; // Explains why status is false... Entirely informational. Please only log this but do not use for your checks
  data: any;
}

export default class Api {
  private instance: AxiosInstance;

  constructor(key: string) {
    this.instance = axios.create({
      baseURL: "https://api.paystack.co",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
  }

  public async request<R = any, D = any>(req: AxiosRequestConfig<D>) {
    try {
      req.data = snakecaseKeys(req.data as any, { deep: true });
      const res = await this.instance.request(req);
      if (!res.status)
        throw new AxiosError(
          res.data.message,
          String(res.status),
          res.config,
          res.request,
        );
      return camelcaseKeys(res.data ? res.data.data : res.data, {
        deep: true,
      }) as R;
    } catch (error: AxiosError | Error | any) {
      throw new ServiceError(error.response.message);
    }
  }
}
