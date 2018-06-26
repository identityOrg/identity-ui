export interface Audit {
  id: string;
  eventName: string;
  eventTime: Date;
  authType: string;
  exceptionName: string;
  exceptionMessage: string;
  principleName: string;
  principleType: string;
  remoteIp: string;
  sessionId: string;
  message: string;
}
