import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MakeDeliveryComponent } from './make-delivery/make-delivery.component';
import { AcceptDeliveryComponent } from './accept-delivery/accept-delivery.component';
import { ErserviceService } from './erservice.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';


export const routes = [
  {path: 'order', component: OrderComponent},
  {path: 'payment', component: OrderComponent},
  {path: 'store', component: OrderComponent},
  {path: 'delivery', component: OrderComponent},
  {path: 'item', component: OrderComponent},
  {path: 'makedelivery', component: MakeDeliveryComponent},
  {path: 'acceptdelivery', component: AcceptDeliveryComponent},
  {path: 'otp', component: OtpComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrderComponent,
    MakeDeliveryComponent,
    AcceptDeliveryComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [ErserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
