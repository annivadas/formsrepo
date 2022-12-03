import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { ProductListComponent } from './page/lists/product-list/product-list.component';
import { CustomerListComponent } from './page/lists/customer-list/customer-list.component';
import { OrderListComponent } from './page/lists/order-list/order-list.component';
import { BillListComponent } from './page/lists/bill-list/bill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    CustomerListComponent,
    OrderListComponent,
    BillListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
