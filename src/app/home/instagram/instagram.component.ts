import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
    public photos$: Observable<InstagramPhotoData[]>;

    constructor(http: Http) {
        this.photos$ = http.get(`https://wt-9017166451e5dc00461b648d19f5e8da-0.sandbox.auth0-extend.com/sydney-chamber-instagram`).pipe(
            map((res) => res.json() as InstagramPhotoResponse),
            map((res) => res.data),
        );
    }

    public ngOnInit(): void {}
}
