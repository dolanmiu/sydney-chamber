import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [NgxPageScrollModule, BrowserModule, NavBarModule, FooterModule, AppRoutingModule, HomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
