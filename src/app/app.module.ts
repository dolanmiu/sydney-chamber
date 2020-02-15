import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
    declarations: [AppComponent, ScrollToTopComponent],
    imports: [
        NgxPageScrollCoreModule.forRoot({
            duration: 700,
            scrollOffset: 50,
            easingLogic: (t: number, b: number, c: number, d: number): number => {
                if (t === 0) {
                    return b;
                }

                if (t === d) {
                    return b + c;
                }

                if ((t /= d / 2) < 1) {
                    return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
                }

                return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
            },
        }),
        BrowserModule,
        NavBarModule,
        FooterModule,
        AppRoutingModule,
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
