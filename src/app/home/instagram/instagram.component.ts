import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent implements OnInit {
    public photos$: Observable<InstagramPhotoData[]>;

    constructor(http: HttpClient) {
        this.photos$ = http
            .get<InstagramPhotoResponse>(`https://wt-9017166451e5dc00461b648d19f5e8da-0.sandbox.auth0-extend.com/sydney-chamber-instagram`)
            .pipe(map((res) => res.data));
    }

    public ngOnInit(): void {}
}
