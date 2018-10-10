import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, TimelineModule],
    declarations: [HomeComponent],
})
export class HomeModule {}
