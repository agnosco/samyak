import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customers/customer-list.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }