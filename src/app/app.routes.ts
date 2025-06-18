import { Routes } from '@angular/router';
import { RouteComponent } from './route/route.component';
import { AppComponent } from './product/product.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

export const routes: Routes = [
    {path:"",component:LoginpageComponent},
    {path:'route',component:RouteComponent},
    {path:"products",component:AppComponent},
];
