import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesModule } from '../services/services.module';
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
            imports: [TimelineModule, AgmCoreModule.forRoot(), ServicesModule, CardModule],
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
