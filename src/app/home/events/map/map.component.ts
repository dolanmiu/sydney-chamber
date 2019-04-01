import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    @Input()
    public events: EventPackage[];

    @Input()
    public selectedEvent: EventPackage;

    constructor() {}

    public ngOnInit(): void {}
}
