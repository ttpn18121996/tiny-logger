import ILoggerConfig from './ILoggerConfig';

export enum LOG_LEVEL {
  EMERGENCY,
  ALERT,
  CRITICAL,
  ERROR,
  WARNING,
  NOTICE,
  INFO,
  DEBUG,
}

export default interface ILogger {
  _config: ILoggerConfig;
  emergency: (message: string, context: Record<string, string>) => void;
  alert: (message: string, context: Record<string, string>) => void;
  critical: (message: string, context: Record<string, string>) => void;
  error: (message: string, context: Record<string, string>) => void;
  warning: (message: string, context: Record<string, string>) => void;
  notice: (message: string, context: Record<string, string>) => void;
  info: (message: string, context: Record<string, string>) => void;
  debug: (message: string, context: Record<string, string>) => void;
  log: (level: LOG_LEVEL, message: string, context: Record<string, string>) => void;
}
