import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { CdkStepperModule } from '@angular/cdk/stepper';
import{ MatStepperModule } from '@angular/material/stepper';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { PengurusanVendorComponent } from './pengurusan-vendor/pengurusan-vendor.component';
import { PengurusanIklanComponent } from './pengurusan-iklan/pengurusan-iklan.component';
import { RfxPembukaanComponent } from './rfx-pembukaan/rfx-pembukaan.component';
import { RfxAnalisaComponent } from './rfx-analisa/rfx-analisa.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    PengurusanVendorComponent,
    PengurusanIklanComponent,
    RfxPembukaanComponent,
    RfxAnalisaComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    MatStepperModule,
    CdkStepperModule
  ]
})
export class AdminModule { }
