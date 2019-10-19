import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { info } from '../const';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  name: string;
  item;
  constructor(private r: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.r.snapshot.routeConfig.path;
    this.item = info.filter(x => x.path === this.name)[0];
  }

}
