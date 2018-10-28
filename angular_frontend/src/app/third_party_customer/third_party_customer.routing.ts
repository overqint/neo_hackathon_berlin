import { Routes } from '@angular/router';

import { ThirdPartyCustomerComponent } from './third_party_customer.component';

export const ThirdPartyCustomerRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ThirdPartyCustomerComponent
    }]
}
];
