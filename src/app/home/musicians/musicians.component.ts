import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-musicians',
    templateUrl: './musicians.component.html',
    styleUrls: ['./musicians.component.scss'],
})
export class MusiciansComponent implements OnInit {
    public musicians: Musician[] = [
        {
            name: 'Evan Streater',
            image: 'evan-streater.jpg',
        },
        {
            name: 'Glenn Christensen',
            image: 'glenn-christensen.jpg',
        },
        {
            name: 'Caroline Hopson',
            image: 'caroline-hopson.jpg',
        },
        {
            name: 'Nathan Greentree',
            image: 'nathan-greentree.jpg',
        },
        {
            name: 'Heather Lindsay',
            image: 'heather-lindsay.jpg',
        },
    ];
    constructor() {}

    public ngOnInit(): void {}
}
