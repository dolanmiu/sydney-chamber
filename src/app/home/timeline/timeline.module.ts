import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TimelineComponent } from './timeline.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TimelineComponent],
    exports: [TimelineComponent],
})
export class TimelineModule {}
