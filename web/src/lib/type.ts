export type NotifType = "info" | "error" | "warning" | "success";

export type Notification = {
  id: string;
  title?: string;
  message?: string;
  type: NotifType;
  timeout?: number;
  ignore?: boolean;
};
