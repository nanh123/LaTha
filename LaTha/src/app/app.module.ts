import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Components/shared/main-layout/main-layout.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { KhamphaComponent } from './Components/khampha/khampha.component';
import { KhuyenmaiComponent } from './Components/khuyenmai/khuyenmai.component';
import { DuyTanComponent } from './Components/duy-tan/duy-tan.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    KhamphaComponent,
    KhuyenmaiComponent,
    DuyTanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
