import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
    @Input()
    public events: EventPackage[];

    @Input()
    public selectedEvent: EventPackage;

    @Input()
    public height: number;

    constructor() {}

    public ngOnInit(): void {}
}
