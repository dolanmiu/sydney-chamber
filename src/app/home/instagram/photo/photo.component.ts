import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
    @Input() public photo: InstagramPhotoData;

    constructor() {}
}
