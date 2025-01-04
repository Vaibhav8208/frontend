// sms.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SmsService {
  private twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${environment.twilio.accountSid}/Messages.json`;

  constructor(private http: HttpClient) {}

  sendSms(phoneNumber: string, message: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('To', phoneNumber);
    body.set('From', environment.twilio.phoneNumber);
    body.set('Body', message);

    const headers = new HttpHeaders()
      .set(
        'Authorization',
        'Basic ' + btoa(environment.twilio.accountSid + ':' + environment.twilio.authToken)
      );

    return this.http.post(this.twilioUrl, body.toString(), { headers });
  }
}
