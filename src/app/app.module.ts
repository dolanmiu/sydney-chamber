import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavBarModule, FooterModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
