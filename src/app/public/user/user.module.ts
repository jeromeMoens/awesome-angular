import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserChoiceComponent } from './choice/user-choice.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserChoiceComponent],
  imports: [
    SharedModule,
    HttpClientModule
  ]
})
export class UserModule { }
