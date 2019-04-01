import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { EventComponent } from './event/event.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CardComponent, EventComponent],
    exports: [CardComponent],
})
export class CardModule {}
