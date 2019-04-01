import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, filter, scan } from 'rxjs/operators';

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
        this.events$ = eventsService.Events.pipe(
            map((events) => {
                const [one, two, three] = events;

                return [one, two, three];
            }),
            map((x) => x.filter((y) => !!y)),
        );
    }

    public ngOnInit(): void {}

    public selectEvent(event: EventPackage): void {
        this.selectedEvent = event;
    }
}
