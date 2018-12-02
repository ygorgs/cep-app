import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddressSearchComponent } from './address-search/address-search.component';
import { environment } from 'src/environments/environment';

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
    HttpClientModule,
    TextMaskModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    { provide: 'API', useValue: environment.BASE_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
