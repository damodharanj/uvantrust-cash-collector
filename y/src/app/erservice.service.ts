import { Injectable, OnInit } from '@angular/core';
import { from, Subject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErserviceService {

  seconds = 10;
  otpSub = new BehaviorSubject(null);
  otp = this.otpSub.asObservable();

  timerSub = new BehaviorSubject(this.seconds);
  timer = this.timerSub.asObservable();

  constructor() { }

  generateOTP(data) {
    return this.fetch('/d_otp', data).pipe(tap(x => {
      this.otpSub.next(x);
      const intv = setInterval(() => {
        this.seconds--;
        this.timerSub.next(this.seconds);
        if (this.seconds < 0) {
          clearInterval(intv);
          this.seconds = 10;
          this.timerSub.next(this.seconds);
          this.otpSub.next(null);
        }
      }, 1000);
    }));
  }

  acceptOTP(id) {
    return this.fetch('/accept_otp', {id}).pipe(tap(x => {
      this.seconds = 10;
      this.timerSub.next(this.seconds);
      this.otpSub.next(null);
    }));
  }

  rejectOTP(id) {
    this.fetch('/reject_otp', id).subscribe(x => {
      this.seconds = 10;
      this.timerSub.next(this.seconds);
      this.otpSub.next(null);
    });
  }

  fetch(url, data) {
    return from(fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })).pipe(switchMap(x => {
            const y = x.json();
            return from(y);
        }));
}
}
