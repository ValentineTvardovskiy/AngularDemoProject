import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {CategoryService} from './services/category.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';

const appRouts: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRouts
    ),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
