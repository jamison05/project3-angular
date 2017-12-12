import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserRegulationComponent } from './user-regulation/user-regulation.component';
import { SignInComponent } from './user-regulation/sign-in/sign-in.component';
import { SignUpComponent } from './user-regulation/sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FishGeneralComponent } from './fish-general/fish-general.component';
import { FishDetailsComponent } from './fish-general/fish-details/fish-details.component';
import { FishCategoryComponent } from './fish-general/fish-category/fish-category.component';
import { FishCommerceComponent } from './fish-general/fish-commerce/fish-commerce.component';

import { UserApiService } from './services/user-api.service';
import { FishGeneralApiService } from './services/fish-general-api.service';
import { CommerceApiService } from './services/commerce-api.service';


@NgModule({
  declarations: [
    AppComponent,
    UserRegulationComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    FishGeneralComponent,
    FishDetailsComponent,
    FishCategoryComponent,
    FishCommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserApiService,
    FishGeneralApiService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
