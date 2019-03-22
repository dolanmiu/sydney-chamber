import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFadeComponent } from './bottom-fade.component';

describe('BottomFadeComponent', () => {
    let component: BottomFadeComponent;
    let fixture: ComponentFixture<BottomFadeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BottomFadeComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BottomFadeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
