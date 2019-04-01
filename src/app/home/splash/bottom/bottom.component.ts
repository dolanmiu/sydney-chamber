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
    public readonly event$: Observable<EventPackage>;

    constructor(eventsService: EventsService) {
        this.event$ = eventsService.Events.pipe(
            map((events) => {
                const [one] = events;

                return one;
            }),
        );
    }

    public ngOnInit(): void {}
}
