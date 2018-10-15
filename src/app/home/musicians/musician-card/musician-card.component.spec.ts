import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianCardComponent } from './musician-card.component';

describe('MusicianCardComponent', () => {
    let component: MusicianCardComponent;
    let fixture: ComponentFixture<MusicianCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MusicianCardComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MusicianCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
