import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventsService } from '../../services/events.service';

@Component({
    selector: 'app-bottom',
    templateUrl: './bottom.component.html',
    styleUrls: ['./bottom.component.scss'],
})
export class BottomComponent implements OnInit {
    public readonly event$: Observable<EventPackage[]>;

    constructor(readonly eventsService: EventsService) {
        this.event$ = eventsService.Events.pipe(
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
            map((x) => [...x].sort((a, b) => new Date(a[0].event.start.local).getTime() - new Date(b[0].event.start.local).getTime())),
            map((events) => {
                const [one] = events;

                return one;
            }),
        );
    }

    public ngOnInit(): void {}
}
