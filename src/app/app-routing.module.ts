import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegulationComponent } from './user-regulation/user-regulation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FishGeneralComponent } from './fish-general/fish-general.component';
import { FishDetailsComponent } from './fish-general/fish-details/fish-details.component';
import { FishCommerceComponent } from './fish-general/fish-commerce/fish-commerce.component';
import { SignUpComponent } from './user-regulation/sign-up/sign-up.component';
import { SignInComponent } from './user-regulation/sign-in/sign-in.component';
const routes: Routes = [


  { path: '',           component: HomePageComponent },
  { path: 'join',       component: SignUpComponent },
  { path:'login',       component:SignInComponent},
  { path: 'fish', component: FishGeneralComponent},
  { path: 'displayfish/:id', component:FishDetailsComponent},
  {path:'displayCommerce',component:FishCommerceComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
