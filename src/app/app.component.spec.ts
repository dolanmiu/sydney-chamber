import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, ScrollToTopComponent],
            imports: [FooterModule, NavBarModule, RouterTestingModule],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
