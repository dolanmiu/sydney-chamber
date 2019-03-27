import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card/card.component';
import { EventsComponent } from './events.component';
import { MapComponent } from './map/map.component';
import { TimelineModule } from './timeline/timeline.module';

describe('EventsComponent', () => {
    let component: EventsComponent;
    let fixture: ComponentFixture<EventsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventsComponent, CardComponent, MapComponent],
            imports: [TimelineModule, AgmCoreModule.forRoot()],
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
