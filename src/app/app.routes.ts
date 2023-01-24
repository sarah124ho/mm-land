import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule)
    },

    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(mod => mod.ProfileModule)
    },
    { path: '**', redirectTo: '/auth' }
]