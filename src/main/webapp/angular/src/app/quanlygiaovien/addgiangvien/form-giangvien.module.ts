import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { MaterialModule } from '../app.module';

//import { TablesRoutes } from './giangvien.routing';


import { FormGiangVienComponent } from './form-giangvien.component';


@NgModule({
  imports: [
    CommonModule,
    //RouterModule.forChild(TablesRoutes),
    FormsModule,
    //MaterialModule
  ],
  declarations: [
    FormGiangVienComponent
  ]
})

export class FormGiangVienModule {}