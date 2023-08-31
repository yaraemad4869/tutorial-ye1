import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: 'Home', component: HeaderComponent },
  { path: '', component: HeaderComponent },
  { path: "Products", component: ProductComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact-us", component: ContactUsComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
