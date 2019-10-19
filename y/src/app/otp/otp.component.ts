import { Component, OnInit } from '@angular/core';
import { ErserviceService } from '../erservice.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  logs = [{
    id: 1,
    accpeted: false,
    expired: false
  }];
  displayed = ['id', 'accpeted', 'expired'];
  constructor(
    private ser: ErserviceService
  ) { }

  ngOnInit() {
    fetch('/d_otp').then(x => {
      x.json().then(val => {
        console.log(val);
        this.logs = val;
      })
    })
  }

}
