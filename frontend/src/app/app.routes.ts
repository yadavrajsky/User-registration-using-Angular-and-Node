import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'register', component: UserRegistrationComponent },
    { path: 'fetch', component: UserListComponent },
    { path: '', component: AppComponent },
    { path: '**', redirectTo: '/register', pathMatch: 'full' }
];

