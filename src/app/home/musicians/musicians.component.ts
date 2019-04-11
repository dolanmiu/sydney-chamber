import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-musicians',
    templateUrl: './musicians.component.html',
    styleUrls: ['./musicians.component.scss'],
})
export class MusiciansComponent implements OnInit {
    public musicians = [
        {
            name: 'Evan Streater',
        },
        {
            name: 'Glenn Christensen',
        },
        {
            name: 'Caroline Hopson',
        },
        {
            name: 'Nathan Greentree',
        },
        {
            name: 'Heather Lindsay',
        },
    ];
    constructor() {}

    public ngOnInit(): void {}
}
