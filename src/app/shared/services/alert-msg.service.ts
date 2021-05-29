
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AlertMsg, AlertType } from '../../models';

@Injectable({ providedIn: 'root' })
export class AlertMsgService {
    private subject = new Subject<AlertMsg>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<AlertMsg> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // convenience methods
    success(message: string, options?: any) {
        this.alert(new AlertMsg({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new AlertMsg({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new AlertMsg({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new AlertMsg({ ...options, type: AlertType.Warning, message }));
    }

    // main alert method
    alert(alert: AlertMsg) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new AlertMsg({ id }));
    }
}
