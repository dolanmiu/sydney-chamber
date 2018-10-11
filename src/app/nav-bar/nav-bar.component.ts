import { Component, OnInit, Renderer, HostBinding } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    @HostBinding('class.unscrolled')
    public unscrolled = true;

    constructor(renderer: Renderer) {
        renderer.listenGlobal('window', 'scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            this.unscrolled = scrollTop < 60 ? true : false;
        });
    }

    public ngOnInit(): void {}
}
