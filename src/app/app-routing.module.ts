import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegulationComponent } from './user-regulation/user-regulation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FishGeneralComponent } from './fish-general/fish-general.component';
const routes: Routes = [


  { path: '',           component: HomePageComponent },
  { path: 'join',       component: UserRegulationComponent },
  { path: 'fish',       component: FishGeneralComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
