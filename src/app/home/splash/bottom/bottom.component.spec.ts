import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesModule } from '../../services/services.module';
import { BottomComponent } from './bottom.component';

describe('BottomComponent', () => {
    let component: BottomComponent;
    let fixture: ComponentFixture<BottomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ServicesModule],
            declarations: [BottomComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BottomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
