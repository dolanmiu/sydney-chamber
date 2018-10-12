import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about/about.component';
import { EventsModule } from './events/events.module';
import { HomeComponent } from './home.component';
import { SplashComponent } from './splash/splash.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, SplashComponent, AboutComponent],
            imports: [EventsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
