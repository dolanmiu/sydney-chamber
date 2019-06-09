import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InstagramComponent } from './instagram.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [InstagramComponent, PhotoComponent],
    exports: [InstagramComponent],
})
export class InstagramModule {}
