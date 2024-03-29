// Generated by https://quicktype.io

import { TransferReciepientType } from "./enum";

export interface IReciepientResponse {
  active: boolean;
  createdAt: string;
  currency: string;
  domain: string;
  id: number;
  integration: number;
  name: string;
  recipientCode: string;
  type: string;
  updatedAt: string;
  isDeleted: boolean;
  details: IDetails;
}

export interface IInitiateTransferResponse {
  reference: string;
  integration: number;
  domain: string;
  amount: number;
  currency: string;
  source: string;
  reason: string;
  recipient: number;
  status: string;
  transferCode: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface InitiateTransferData {
  source: string;
  reason: string;
  amount: number;
  reciepient: string;
  metadata?: Record<string, any>;
}

export interface IDetails {
  authorizationCode: null;
  accountNumber: string;
  accountName: null;
  bankCode: string;
  bankName: string;
}

export interface TransferReciepientData {
  type: TransferReciepientType;
  name: string;
  currency: string;
  bankCode: string;
  accountNumber: string;
}

export interface ChargeCreationData {
  email: string;
  amount: number;
  metadata?: Record<string, string>;
  card?: any;
  bank?: any;
  authorizationCode: string;
}

export interface SubmitPinData {
  pin: string;
  reference: string;
}

export interface SubmitPhoneData {
  phone: string;
  reference: string;
}

export interface SubmitBirthdayData {
  birthday: string;
  reference: string;
}

export interface SubmitOtpData {
  otp: string;
  reference: string;
}

export interface TransactionData {
  email: string;
  amount: string;
}

export interface TransactionInitData extends TransactionData {
  metadata?: Record<string, any>;
}

export interface TransactionInitResponse {
  authorizationUrl: string;
  accessCode: string;
  reference: string;
  metadata?: Record<string, any>;
}

export interface Req {
  headers: Record<string, any>;
  body: any;
  [key: string]: any;
}

export interface Res {
  sendStatus: (code: number | string) => any;
  [key: string]: any;
}

