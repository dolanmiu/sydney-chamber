import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { InstagramComponent } from './instagram.component';
import { PhotoComponent } from './photo/photo.component';

describe('InstagramComponent', () => {
    let component: InstagramComponent;
    let fixture: ComponentFixture<InstagramComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InstagramComponent, PhotoComponent],
            imports: [HttpModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InstagramComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
