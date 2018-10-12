import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AboutComponent } from './about/about.component';
import { EventsModule } from './events/events.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
    imports: [NgxPageScrollModule, CommonModule, HomeRoutingModule, EventsModule],
    declarations: [HomeComponent, AboutComponent, SplashComponent],
})
export class HomeModule {}
