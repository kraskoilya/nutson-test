import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth.service';
import { LoginEffects } from './store/effects/login.effect';
import { reducer } from './store/redusers';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
