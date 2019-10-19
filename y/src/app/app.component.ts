import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';
  resp: any = [];

  ngOnInit() {
    this.fetch('cat');
  }

  fetch(url, param?) {
      this.resp = fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify(param)
          }).then(x => {
             x.json().then(y => {
              this.resp = y;
            });

          });
  }
}
