import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { OperatorLogicComponent } from './pages/operator-logic/operator-logic.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ConversorComponent,
    OperatorLogicComponent,
    HomeComponent
  ],
  exports:[
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
