import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
    imports: [CommonModule, TimelineModule],
    declarations: [EventsComponent],
    exports: [EventsComponent],
})
export class EventsModule {}
