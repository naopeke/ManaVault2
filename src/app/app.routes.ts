import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdvancedComponent } from './pages/advanced/advanced.component';
import { DeckbuilderComponent } from './pages/deckbuilder/deckbuilder.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './services/auth.guard';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'advanced', component: AdvancedComponent },
    { path: 'deckbuilder', component: DeckbuilderComponent },
    { path: 'admin', component: AdminComponent, canActivate:[authGuard]}
];
