import { Component, DoCheck, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { EventsService } from '../services/events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements DoCheck {
    public readonly events$: Observable<{ [key: number]: EventPackage[] }>;
    public selectedEvent: EventPackage;
    public height: number;

    constructor(readonly eventsService: EventsService, private readonly el: ElementRef) {
        this.events$ = eventsService.Events.pipe(
            map((x) => x.filter((y) => !!y)),
            map((events) => {
                return events.reduce<{ [key: string]: EventPackage[] }>((acc, curr) => {
                    const name = curr.event.name.text;

                    return {
                        ...acc,
                        [name]: acc[name] ? [...acc[name], curr] : [curr],
                    };
                }, {});
            }),
            map((x) => Object.values(x)),
            map((x) => x.sort((a, b) => new Date(a[0].event.start.local).getTime() - new Date(b[0].event.start.local).getTime())),
            map((obj) => ({ ...obj })),
        );
    }

    public ngDoCheck(): void {
        this.height = this.el.nativeElement.offsetHeight;
    }

    public selectEvent(event: EventPackage): void {
        this.selectedEvent = event;
    }
}
