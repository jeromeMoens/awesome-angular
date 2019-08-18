import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WorkdayComponent } from './workday/workday.component';
import { WorkdayRoutingModule } from './workday-routing.module';

@NgModule({
  declarations: [WorkdayComponent],
  imports: [
    SharedModule,
    WorkdayRoutingModule
  ]
})
export class WorkdayModule { }
