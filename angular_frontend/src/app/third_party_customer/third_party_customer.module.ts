import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { ThirdPartyCustomerComponent } from './third_party_customer.component';
import { ThirdPartyCustomerRoutes } from './third_party_customer.routing';

@NgModule({
    imports: [
        RouterModule.forChild(ThirdPartyCustomerRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [ThirdPartyCustomerComponent]
})

export class ThirdPartyCustomerModule {}
