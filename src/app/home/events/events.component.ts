import { Component, DoCheck, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventsService } from '../services/events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements DoCheck {
    public readonly events$: Observable<EventPackage[]>;
    public selectedEvent: EventPackage;
    public height: number;

    constructor(readonly eventsService: EventsService, private readonly el: ElementRef) {
        this.events$ = eventsService.Events.pipe(
            map((events) => {
                const [one, two, three] = events;

                return [one, two, three];
            }),
            map((x) => x.filter((y) => !!y)),
        );
    }

    public ngDoCheck(): void {
        this.height = this.el.nativeElement.offsetHeight;
    }

    public selectEvent(event: EventPackage): void {
        this.selectedEvent = event;
    }
}
