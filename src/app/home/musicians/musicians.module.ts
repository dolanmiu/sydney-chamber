import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MusicianCardComponent } from './musician-card/musician-card.component';
import { MusiciansComponent } from './musicians.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MusiciansComponent, MusicianCardComponent],
    exports: [MusiciansComponent],
})
export class MusiciansModule {}
