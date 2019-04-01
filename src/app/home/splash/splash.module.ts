import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicesModule } from '../services/services.module';
import { BottomComponent } from './bottom/bottom.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { SplashComponent } from './splash.component';

@NgModule({
    imports: [CommonModule, ServicesModule],
    declarations: [SplashComponent, HeroImageComponent, BottomComponent],
    exports: [SplashComponent],
})
export class SplashModule {}
