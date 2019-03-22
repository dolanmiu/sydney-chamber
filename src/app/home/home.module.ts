import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { DiscographyModule } from '../discography/discography.module';
import { AboutModule } from './about/about.module';
import { EventsModule } from './events/events.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MusiciansModule } from './musicians/musicians.module';
import { SplashModule } from './splash/splash.module';

@NgModule({
    imports: [
        NgxPageScrollModule,
        CommonModule,
        HomeRoutingModule,
        EventsModule,
        MusiciansModule,
        AboutModule,
        SplashModule,
        DiscographyModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule {}
