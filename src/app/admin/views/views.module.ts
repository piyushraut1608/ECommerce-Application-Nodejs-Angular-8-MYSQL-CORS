import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentTableComponent } from './department/department-table/department-table.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { AddComponent } from './department/department-add/add/add.component';
import { EditComponent } from './department/department-edit/edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
  ],
  declarations: [
    FooterComponent,
    Profile1Component,
    DepartmentComponent,
    DepartmentTableComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    AddComponent,
    EditComponent

  ],
  exports: [
    FooterComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
