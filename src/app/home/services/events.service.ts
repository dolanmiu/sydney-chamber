import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable()
export class EventsService {
    private readonly events: Observable<EventPackage[]>;

    constructor(readonly httpClient: HttpClient) {
        this.events = httpClient
            .get<EventResponse>(`https://wt-9017166451e5dc00461b648d19f5e8da-0.sandbox.auth0-extend.com/sydney-chamber-webtasks`)
            .pipe(
                map((res) => res.events),
                map((events) => events.filter((e) => e.event.status === 'live')),
                share(),
            );
    }

    public get Events(): Observable<EventPackage[]> {
        return this.events;
    }
}
