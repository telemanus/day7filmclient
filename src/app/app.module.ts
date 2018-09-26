import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//added by me
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindfilmComponent } from './components/findfilm.component';
import { ListfilmComponent } from './components/listfilm.component';
import { SakilafilmService } from './services/sakilafilm.service';

@NgModule({
  declarations: [
    AppComponent,
    FindfilmComponent,
    ListfilmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [SakilafilmService], //added here
  bootstrap: [AppComponent]
})
export class AppModule { }
