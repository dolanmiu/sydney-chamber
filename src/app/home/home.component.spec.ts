import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModule } from './about/about.module';
import { DiscographyModule } from './discography/discography.module';
import { EventsModule } from './events/events.module';
import { HomeComponent } from './home.component';
import { MusiciansModule } from './musicians/musicians.module';
import { ServicesModule } from './services/services.module';
import { SplashModule } from './splash/splash.module';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [EventsModule, MusiciansModule, AboutModule, SplashModule, DiscographyModule, ServicesModule],
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
