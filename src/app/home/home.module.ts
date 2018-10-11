import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SplashComponent } from './splash/splash.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, TimelineModule],
    declarations: [HomeComponent, AboutComponent, SplashComponent],
})
export class HomeModule {}
