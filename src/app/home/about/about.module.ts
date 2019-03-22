import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [AboutComponent],
    exports: [AboutComponent],
})
export class AboutModule {}
