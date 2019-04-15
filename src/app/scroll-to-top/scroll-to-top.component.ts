import { Component, HostBinding, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
    @HostBinding('class.unscrolled')
    public unscrolled = true;

    @HostBinding('class.inverted')
    public inverted = true;

    constructor(readonly renderer: Renderer2) {
        renderer.listen('window', 'scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            this.unscrolled = scrollTop < 1000 ? true : false;

            const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
            const windowHeight = window.innerHeight;
            const windowHeightPlusWindowHeight = scrollTop + windowHeight;

            this.inverted = windowHeightPlusWindowHeight > pageHeight - 410;
        });
    }
}
