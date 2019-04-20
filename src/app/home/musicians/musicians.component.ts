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
            instrument: 'Piano',
        },
        {
            name: 'Glenn Christensen',
            image: 'glenn-christensen.jpg',
            instrument: 'Violin',
        },
        {
            name: 'Caroline Hopson',
            image: 'caroline-hopson.jpg',
            instrument: 'Violin',
        },
        {
            name: 'Nathan Greentree',
            image: 'nathan-greentree.jpg',
            instrument: 'Viola',
        },
        {
            name: 'Heather Lindsay',
            image: 'heather-lindsay.jpg',
            instrument: 'Cello',
        },
        {
            name: 'David Greco',
            image: 'david-greco.jpg',
            instrument: 'Baritone',
        },
        {
            name: 'Vatche Jambazian',
            image: 'vatche-jambazian.jpg',
            instrument: 'Piano',
        },
    ];
    constructor() {}

    public ngOnInit(): void {}
}
