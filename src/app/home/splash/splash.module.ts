import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroImageComponent } from './hero-image/hero-image.component';
import { SplashComponent } from './splash.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SplashComponent, HeroImageComponent],
    exports: [SplashComponent],
})
export class SplashModule {}
