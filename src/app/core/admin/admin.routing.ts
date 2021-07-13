import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { PengurusanVendorComponent } from './pengurusan-vendor/pengurusan-vendor.component';
import { PengurusanIklanComponent } from './pengurusan-iklan/pengurusan-iklan.component';
import { RfxPembukaanComponent } from './rfx-pembukaan/rfx-pembukaan.component';
import { RfxAnalisaComponent } from './rfx-analisa/rfx-analisa.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pengurusan-vendor',
                component: PengurusanVendorComponent
            },
            {
                path: 'pengurusan-iklan',
                component: PengurusanIklanComponent
            },
            {
                path: 'rfx',
                children: [
                    {
                        path: 'pembukaan',
                        component: RfxPembukaanComponent
                    },
                    {
                        path: 'analisa',
                        component: RfxAnalisaComponent
                    }
                ]
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]