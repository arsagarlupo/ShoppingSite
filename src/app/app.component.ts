import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
// import { ProductcardComponent } from './productcard/productcard.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule,RouterModule,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopSite';

}
