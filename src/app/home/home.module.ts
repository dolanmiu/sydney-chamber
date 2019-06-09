import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AboutModule } from './about/about.module';
import { DiscographyModule } from './discography/discography.module';
import { EventsModule } from './events/events.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InstagramModule } from './instagram/instagram.module';
import { MusiciansModule } from './musicians/musicians.module';
import { ServicesModule } from './services/services.module';
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
        ServicesModule,
        InstagramModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule {}
