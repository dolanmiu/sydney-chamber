import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-musician-card',
    templateUrl: './musician-card.component.html',
    styleUrls: ['./musician-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicianCardComponent {
    public show: boolean;

    @Input()
    public musician: Musician;

    constructor() {
        this.show = false;
    }
}
