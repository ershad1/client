import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
