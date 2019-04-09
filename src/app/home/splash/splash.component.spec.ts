import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';

import { ServicesModule } from '../services/services.module';
import { BottomComponent } from './bottom/bottom.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { SplashComponent } from './splash.component';

describe('SplashComponent', () => {
    let component: SplashComponent;
    let fixture: ComponentFixture<SplashComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ServicesModule, SharedModule],
            declarations: [SplashComponent, HeroImageComponent, BottomComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SplashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
