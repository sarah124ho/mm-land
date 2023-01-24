import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertOptions, AlertType } from 'src/app/domain/alert.dto';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private confirmation = new Subject<string>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id !== id));
    }

    onConfirm(id: string): Observable<string> {
        return this.confirmation.asObservable().pipe(filter(x => x !== id));
    }

    // convenience methods
    success(message: string, id: string, options: AlertOptions | undefined = undefined) {
        this.alert(options ? { ...options, message: message, id: id, type: AlertType.Success } : {
            id: id,
            message: message,
            type: AlertType.Success
        });
    }

    confirm(message: string, id: string, confirm: string, options: AlertOptions | undefined = undefined) {
        this.alert(options ? { ...options, message: message, id: id, type: AlertType.Warning, confirm: confirm } : {
            id: id,
            message: message,
            type: AlertType.Warning
        });
    }

    error(message: string, id: string, options: AlertOptions | undefined = undefined) {
        this.alert(options ? { ...options, message: message, id: id, type: AlertType.Error } : {
            id: id,
            message: message,
            type: AlertType.Error
        });
    }

    info(message: string, id: string, options: AlertOptions | undefined = undefined) {
        this.alert(options ? { ...options, message: message, id: id, type: AlertType.Info } : {
            id: id,
            message: message,
            type: AlertType.Info
        });
    }

    warn(message: string, id: string, options: AlertOptions | undefined = undefined) {
        this.alert(options ? { ...options, message: message, id: id, type: AlertType.Warning } : {
            id: id,
            message: message,
            type: AlertType.Warning
        });
    }

    // main alert method    
    private alert(alert: Alert) {
        alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
        alert.keepAfterRouteChange = (alert.keepAfterRouteChange === undefined ? false : alert.keepAfterRouteChange);
        alert.fade = (alert.fade === undefined ? false : alert.fade);
        alert.title = (alert.title === undefined ? '' : alert.title);
        alert.confirm = (alert.confirm === undefined ? '' : alert.confirm);
        this.subject.next(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next({ id: id, message: '', type: AlertType.Info });
    }

    confirmPressed(id: string): void {
        this.confirmation.next(id)
    }
}