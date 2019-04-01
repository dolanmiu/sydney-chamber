import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EventsService } from './events.service';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [EventsService],
})
export class ServicesModule {}
