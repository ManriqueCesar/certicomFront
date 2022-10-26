import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { appRoutingModule } from './app.routing';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ToastModule,
    ButtonModule,
    RadioButtonModule,
    InputNumberModule,
    CardModule,
    appRoutingModule,
    MenubarModule,
    BreadcrumbModule,
    AppRoutingModule,
    HttpClientModule,
    ToolbarModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
