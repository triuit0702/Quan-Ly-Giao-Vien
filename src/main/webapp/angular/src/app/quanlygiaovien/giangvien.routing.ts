import { Routes } from '@angular/router';

import { GiangVienComponent } from './datatable.net/giangvien.component';
import {FormGiangVienComponent} from './addgiangvien/form-giangvien.component';

export const TablesRoutes: Routes = [
   {
      path: '',
      children: [ {
        path: 'datatable.net',
        component: GiangVienComponent
        }]
    },
    {
      path: '',
      children: [ {
        path: 'addgiangvien',
        component: FormGiangVienComponent
        }]
    }
];
