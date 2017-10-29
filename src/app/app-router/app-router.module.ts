import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsComponent} from '../core/settings/settings.component';
import {ProfileComponent} from '../core/profile/profile.component';
import {HomeComponent} from '../core/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule {
}
