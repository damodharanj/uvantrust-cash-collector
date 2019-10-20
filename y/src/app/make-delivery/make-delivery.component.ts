import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErserviceService } from '../erservice.service';

@Component({
  selector: 'app-make-delivery',
  templateUrl: './make-delivery.component.html',
  styleUrls: ['./make-delivery.component.css']
})
export class MakeDeliveryComponent implements OnInit, OnDestroy {

  public dm = [{value: 'damo', viewValue: 'Damo'}];
  public order = [{value: 'damo', viewValue: 'Potato'}];
  public store = [{value: 'damo', viewValue: 'Funny Stores'}];
  showInp = false;
  showButton1 = true;
  str = 'Make Delivery!';
  otp = '';

  constructor(private ser: ErserviceService) { }

  ngOnInit() {
    this.ser.otp.subscribe(x => {
      if (x !== null) {
        this.showInp = true;
        this.showButton1 = false;
      }
    });
  }

  requestOTP() {
    this.ser.generateOTP({}).subscribe(x => {
      this.showButton1 = false;

    });
  }

  acceptOTP() {
    this.ser.acceptOTP(this.otp).subscribe(x => {
      this.showInp = false;
      this.showButton1 = true;
    });
  }

  ngOnDestroy(): void {

  }

}
