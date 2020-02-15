import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { InstagramComponent } from './instagram.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [InstagramComponent, PhotoComponent],
    exports: [InstagramComponent],
})
export class InstagramModule {}
