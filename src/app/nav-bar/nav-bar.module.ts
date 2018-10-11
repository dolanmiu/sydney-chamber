import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { NavBarComponent } from './nav-bar.component';

@NgModule({
    imports: [NgxPageScrollModule, CommonModule],
    declarations: [NavBarComponent],
    exports: [NavBarComponent],
})
export class NavBarModule {}
