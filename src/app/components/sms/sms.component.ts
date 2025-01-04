// sms.component.ts
import { Component } from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
})
export class SmsComponent {
  phoneNumber: string = '';
  message: string = '';
  responseMessage: string = '';

  constructor(private smsService: SmsService) {}

  sendSms() {
    this.smsService.sendSms(this.phoneNumber, this.message).subscribe(
      (response) => {
        console.log(response);
        this.responseMessage = 'Message sent successfully!';
      },
      (error) => {
        console.error(error);
        this.responseMessage = 'Failed to send message.';
      }
    );
  }
}
