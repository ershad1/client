import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import {AppRouterModule} from './app-router/app-router.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {SettingsComponent} from './core/settings/settings.component';
import {ProfileComponent} from './core/profile/profile.component';
import {HomeComponent} from './core/home/home.component';
import {LoginComponent} from './core/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
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
export class AppModule {
}
