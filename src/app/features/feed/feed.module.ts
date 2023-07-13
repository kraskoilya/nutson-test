import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { FeedService } from './services/feed.service';
import { FeedEffects } from './store/effects/feed.effect';
import { reducer } from './store/redusers';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([FeedEffects]),
  ],
  providers: [FeedService],
})
export class FeedModule {}
