import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BottomFadeComponent } from './bottom-fade/bottom-fade.component';
import { TopFadeComponent } from './top-fade/top-fade.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TopFadeComponent, BottomFadeComponent],
    exports: [TopFadeComponent, BottomFadeComponent],
})
export class SharedModule {}
