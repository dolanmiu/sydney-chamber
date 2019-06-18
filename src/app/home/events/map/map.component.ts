import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
    @Input()
    public events: { key: string; value: EventPackage[] };

    public iconOptions = {
        url: '/assets/map-marker.svg',
        scaledSize: { height: 76, width: 50 },
    };

    @Input()
    public selectedEvent: EventPackage;

    @Input()
    public height: number;
}
