import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductComponent } from './layout/product/product.component';
import { BannerComponent } from './layout/banner/banner.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { LoptopsComponent } from './products/loptops/loptops.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    BannerComponent,
    MobilesComponent,
    LoptopsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
