export const KEY_AUTH_DATA = "auth-data";
export const KEY_AUTH_DATA_LIST = "auth-data-list";

export enum SendMethod {
  GET = 1,
  POST,
  NEVER
}

export interface SendItem {
  key: string;
  value: string;
  hint: string;
  displayText?: string;
}

export interface Authorization {
  title: string;
  url: string;
  method: SendMethod;
  sendItems: SendItem[];
}
