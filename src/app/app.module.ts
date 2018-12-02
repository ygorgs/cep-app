import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddressSearchComponent } from './address-search/address-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddressSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TextMaskModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
