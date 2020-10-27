import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discography',
    templateUrl: './discography.component.html',
    styleUrls: ['./discography.component.scss'],
})
export class DiscographyComponent implements OnInit {
    private apiLoaded = false;

    constructor() {}

    public ngOnInit(): void {
        if (!this.apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
        }
    }
}
