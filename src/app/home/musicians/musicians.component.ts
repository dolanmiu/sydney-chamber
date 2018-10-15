import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-musicians',
    templateUrl: './musicians.component.html',
    styleUrls: ['./musicians.component.scss'],
})
export class MusiciansComponent implements OnInit {
    public musicians = [
        {
            name: 'Evan',
        },
        {
            name: 'Evan',
        },
        {
            name: 'Evan',
        },
        {
            name: 'Evan',
        },
    ];
    constructor() {}

    public ngOnInit(): void {}
}
