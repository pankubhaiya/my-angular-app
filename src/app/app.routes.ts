import { Routes } from '@angular/router';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { SignupComponentComponent } from './component/signup-component/signup-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { DaytwoComponentComponent } from './component/daytwo-component/daytwo-component.component';
import { ItmeListComponent } from './itme-list/itme-list.component';
import { ToDoListComponentComponent } from './component/to-do-list-component/to-do-list-component.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponentComponent },
    { path: 'Signup', component: SignupComponentComponent },
    { path: 'daytwo', component: DaytwoComponentComponent },
    { path: 'dayone', component: ItmeListComponent },
    { path: 'todo', component: ToDoListComponentComponent},
    { path: '', component: HomeComponentComponent },
    { path: '**',redirectTo:"/login", pathMatch:"full"},
    
];
