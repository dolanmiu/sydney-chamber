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
                map((events) => [
                    {
                        event: {
                            name: {
                                text: 'Close Quarters @ The Chamber Project',
                                html: 'string',
                            },
                            start: {
                                local: new Date(2019, 8, 5, 18, 30),
                            },
                            url: 'https://asq.com.au/whats-on/close-quarters-the-chamber-project/',
                            summary:
                                // tslint:disable-next-line:max-line-length
                                'We’re thrilled to team up with The Chamber Project to present this special ASQ Close Quarters event in Sydney! Merging classical music with urban life, The Chamber Project brings extraordinary musical experiences to a unique, familiar setting. Together with Soultrap, we offer the best way to experience this music—close up, well nourished, in comfort. In this relaxed concert we’ll tingle your auditory taste-buds with a diverse selection short works and movements currently under our fingers.',
                        },
                        venue: {
                            address: {
                                address_1: 'string',
                                address_2: 'string',
                                city: 'string',
                                region: 'string',
                                postal_code: 'string',
                                country: 'string',
                                latitude: -33.8798623,
                                longitude: 151.2096914,
                                localized_address_display: '70-72 Campbell St, Surry Hills NSW 2010',
                                localized_area_display: 'string',
                            },
                            name: 'Soulrap Bar',
                            latitude: -33.8798623,
                            longitude: 151.2096914,
                        },
                    // tslint:disable-next-line:no-any
                    } as any,
                    ...events,
                ]),
                share(),
            );
    }

    public get Events(): Observable<EventPackage[]> {
        return this.events;
    }
}
