import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComputersComponent } from './computers/computers.component';
import { PrintersComponent } from './printers/printers.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    
    ComputersComponent,
    PrintersComponent,
    SmartphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
