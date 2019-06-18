import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EventsService } from '../services/events.service';
import { CardModule } from './card/card.module';
import { EventsComponent } from './events.component';
import { MapComponent } from './map/map.component';
import { TimelineModule } from './timeline/timeline.module';

describe('EventsComponent', () => {
    let component: EventsComponent;
    let fixture: ComponentFixture<EventsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventsComponent, MapComponent],
            imports: [TimelineModule, AgmCoreModule.forRoot(), CardModule],
            providers: [
                {
                    provide: EventsService,
                    useValue: {
                        Events: of([
                            {
                                event: {
                                    name: {
                                        text: 'test',
                                    },
                                    start: {
                                        local: '01/01/2000',
                                    },
                                },
                                venue: {
                                    address: {
                                        localized_address_display: '',
                                    },
                                },
                            } as EventPackage,
                        ]),
                    },
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
