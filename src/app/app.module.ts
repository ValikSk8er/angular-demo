import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {CategoryService} from './services/category.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';

const appRouts: Routes = [
  {path: 'category', component: CategoriesComponent},
  {path: 'registration', component: RegistrationComponent},
  { path: 'category/:id', component: CategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    RegistrationComponent,
    CategoryComponent
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
