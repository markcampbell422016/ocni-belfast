import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChurchComponent } from './church.component';
import { ChurchesComponent } from './churches.component';
import { TestWSComponent } from './testWS.component';
import { ParishComponent } from './parish.component';
import { DirectionsComponent } from './directions.component';
import { ResourcesComponent } from './resources.component';
import { OrthodoxfaithComponent } from './orthodoxfaith.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'churches',
        component: ChurchesComponent
    },
    {
        path: 'churches/:id',
        component: ChurchComponent
    },
    {
        path: 'test',
        component: TestWSComponent
    },
    {
        path: 'parish',
        component: ParishComponent
    },
    {
        path: 'directions',
        component: DirectionsComponent
    },
    {
        path: 'resources',
        component: ResourcesComponent
    },
    {
        path: 'orthodoxfaith',
        component: OrthodoxfaithComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
