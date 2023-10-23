import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/card/input/input.component';
import { CardInfoComponent } from './components/card/card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
