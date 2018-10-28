import { Routes } from '@angular/router';

import { ServiceMaintananceComponent } from './service_maintanance.component';

export const ServiceMaintananceRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ServiceMaintananceComponent
    }]
}
];
