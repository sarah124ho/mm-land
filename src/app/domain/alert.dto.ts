export interface Alert {
    id: string;
    type: AlertType;
    message: string;
    autoClose?: boolean;
    keepAfterRouteChange?: boolean;
    fade?: boolean;
    title?: string;
    confirm?: string;
}

export interface AlertOptions {
    autoClose?: boolean;
    keepAfterRouteChange?: boolean;
    fade?: boolean;
    title?: string;
    confirm?: string;
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}