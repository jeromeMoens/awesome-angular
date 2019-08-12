import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PlanningModule } from './planning/planning.module';
import { ParametersModule } from './parameters/parameters.module';
import { ProfilModule } from './profil/profil.module';
import { WorkdayModule } from './workday/workday.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    DashboardModule,
    PlanningModule,
    ParametersModule,
    ProfilModule,
    WorkdayModule
  ]
})
export class ProtectedModule { }
