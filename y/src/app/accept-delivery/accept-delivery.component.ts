import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErserviceService } from '../erservice.service';

@Component({
  selector: 'app-accept-delivery',
  templateUrl: './accept-delivery.component.html',
  styleUrls: ['./accept-delivery.component.css']
})
export class AcceptDeliveryComponent implements OnInit, OnDestroy {

  dm: string;
  otp: string;
  seconds;
  hide = true;
  unsub1; unsub2;
  constructor(private er: ErserviceService) { }

  ngOnInit() {
    this.unsub1 = this.er.otp.subscribe(x => {
      if (x === null) {
        this.hide = true;
      } else {
        this.otp = x;
        this.hide = false;
        this.unsub2 = this.er.timer.subscribe(t => {
          if (t == 0) {
            alert('OTP expired');
            this.hide = true;
            return;
          }
          this.seconds = t;
        });
      }
    });


  }

  ngOnDestroy() {
    if (this.unsub1) {
      this.unsub1.unsubscribe();
    }
    if (this.unsub2) {
      this.unsub2.unsubscribe();
    }
  }



}
