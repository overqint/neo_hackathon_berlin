import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { ManufacturerComponent } from './manufacturer.component';
import { ManufacturerRoutes } from './manufacturer.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ManufacturerRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [ManufacturerComponent]
})

export class ManufacturerModule {}
