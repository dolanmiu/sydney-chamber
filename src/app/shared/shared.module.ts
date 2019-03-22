import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopFadeComponent } from './top-fade/top-fade.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TopFadeComponent],
    exports: [TopFadeComponent],
})
export class SharedModule {}
