import { Component, OnInit } from '@angular/core';

interface Event {
    description: string;
    date: Date;
    title: string;
}

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    public events: Event[] = [
        {
            description: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci
            lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam
            dictum felis eu pede mollis pretium. Pellentesque ut neque.`,
            date: new Date(),
            title: 'Event Hello',
        },
        {
            description: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci
            lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam
            dictum felis eu pede mollis pretium. Pellentesque ut neque.`,
            date: new Date(),
            title: 'Event Hello',
        },
        {
            description: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci
            lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam
            dictum felis eu pede mollis pretium. Pellentesque ut neque.`,
            date: new Date(),
            title: 'Event Hello',
        },
    ];
    constructor() {}

    public ngOnInit(): void {}
}
