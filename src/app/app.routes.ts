import { Routes } from '@angular/router';
import { RouteComponent } from './route/route.component';
import { RiasComponent } from './rias/rias.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:"",component:RiasComponent},
    {path:'route',component:RouteComponent},
    {path:"products",component:ProductComponent},
];
