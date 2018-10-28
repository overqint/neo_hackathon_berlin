import { Routes } from '@angular/router';

import { ManufacturerComponent } from './manufacturer.component';

export const ManufacturerRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ManufacturerComponent
    }]
}
];
