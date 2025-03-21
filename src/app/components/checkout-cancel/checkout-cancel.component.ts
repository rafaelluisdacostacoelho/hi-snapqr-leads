import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-cancel',
  imports: [],
  templateUrl: './checkout-cancel.component.html',
  styleUrl: './checkout-cancel.component.css'
})
export class CheckoutCancelComponent {
  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }
}
