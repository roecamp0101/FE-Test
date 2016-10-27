import {Routes, RouterModule} from '@angular/router';
import {HomeComponentComponent} from './home-component.component';
import {BusinessContactsComponent} from './business-contacts.component';
import {DashboardInfoComponent} from './dashboard-info.component';


const APP_ROUTES: Routes = [
        {path: '', component: HomeComponentComponent},
        {path: 'business-contacts', component: BusinessContactsComponent},
        {path: 'dashboard-info', component: DashboardInfoComponent},
        {path: '**', redirectTo: '', pathMatch: 'full'}
    
];



export const routing = RouterModule.forRoot(APP_ROUTES);