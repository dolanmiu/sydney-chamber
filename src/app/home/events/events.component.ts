import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EventsService } from '../services/events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
    public readonly events$: Observable<EventPackage[]>;
    public selectedEvent: EventPackage;

    constructor(eventsService: EventsService) {
        this.events$ = eventsService.Events;
    }

    public ngOnInit(): void {}

    public selectEvent(event: EventPackage): void {
        this.selectedEvent = event;
    }
}
