import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input()
    public events: Event[];

    @Output()
    public selectedEvent = new EventEmitter<EventPackage>();

    constructor() {}

    public ngOnInit(): void {}

    public selectEvent(event: EventPackage): void {
        this.selectedEvent.emit(event);
    }
}
