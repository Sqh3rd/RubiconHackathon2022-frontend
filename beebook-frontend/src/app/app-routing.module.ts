import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { OwnPageComponent } from './own-page/own-page.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent, children: [
    { path: 'own-hives', component: OwnPageComponent},
    { path: 'other-hives', component: OtherPageComponent},
    { path: 'fav-hives', component: FavPageComponent},
  ]},
  { path: 'login', component: LogInComponent},
  { path: '', redirectTo: "home", pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
