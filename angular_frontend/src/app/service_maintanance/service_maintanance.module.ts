import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { ServiceMaintananceComponent } from './service_maintanance.component';
import { ServiceMaintananceRoutes } from './service_maintanance.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ServiceMaintananceRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [ServiceMaintananceComponent]
})

export class ServiceMaitananceModule {}
