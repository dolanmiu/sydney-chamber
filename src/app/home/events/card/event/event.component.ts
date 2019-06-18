import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent {
    @Input()
    public event: { key: string; value: EventPackage[] };
}
