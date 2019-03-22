import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFadeComponent } from './top-fade.component';

describe('TopFadeComponent', () => {
    let component: TopFadeComponent;
    let fixture: ComponentFixture<TopFadeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopFadeComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopFadeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
