import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from '@core/constants/appRoutes';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoute.FEED },
  {
    path: AppRoute.FEED,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/feed/feed.module').then(
        (m: typeof import('./features/feed/feed.module')) => m.FeedModule
      ),
  },
  {
    path: AppRoute.LOGIN,
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        (m: typeof import('./features/auth/auth.module')) => m.AuthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
