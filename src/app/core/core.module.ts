import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirebaseModule } from './modules/firebase.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    FirebaseModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) { 
      if (parentModule) { 
        throw new Error('CoreModule is already loaded.'); 
      } 
    }
}
