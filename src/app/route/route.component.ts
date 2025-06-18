import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})
export class RouteComponent {
  constructor(private router:Router){}
    gotocart(){
    this.router.navigate(['products']);
  }
  
}
