import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { DiscographyComponent } from './discography.component';

@NgModule({
    imports: [CommonModule, YouTubePlayerModule],
    declarations: [DiscographyComponent],
    exports: [DiscographyComponent],
})
export class DiscographyModule {}
