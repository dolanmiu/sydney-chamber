import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { SplashComponent } from './splash/splash.component';
import { TimelineComponent } from './timeline/timeline.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, SplashComponent, AboutComponent, TimelineComponent],
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
