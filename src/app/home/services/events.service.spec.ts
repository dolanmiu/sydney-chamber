import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';

import { EventsService } from './events.service';

describe('EventsService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: {
                        get: () => empty(),
                    },
                },
                EventsService,
            ],
        }));

    it('should be created', () => {
        const service: EventsService = TestBed.get(EventsService);
        expect(service).toBeTruthy();
    });
});
