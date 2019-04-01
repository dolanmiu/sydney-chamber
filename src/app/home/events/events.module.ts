import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from './card/card.module';
import { EventsComponent } from './events.component';
import { MapComponent } from './map/map.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
    imports: [
        CommonModule,
        TimelineModule,
        CardModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDl90fFMx3gLSeiuXKh562JoXA541cY-ak',
        }),
    ],
    declarations: [EventsComponent, MapComponent],
    exports: [EventsComponent],
})
export class EventsModule {}
