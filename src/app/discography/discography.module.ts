import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DiscographyComponent } from './discography.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DiscographyComponent],
    exports: [DiscographyComponent],
})
export class DiscographyModule {}
