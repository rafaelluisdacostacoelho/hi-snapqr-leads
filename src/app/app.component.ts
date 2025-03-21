import { Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FeaturesComponent } from "./components/features/features.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FaqComponent } from "./components/faq/faq.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeroSectionComponent,
    NavbarComponent,
    FeaturesComponent,
    PricingComponent,
    ContactFormComponent,
    FooterComponent,
    FaqComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCheckoutPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isCheckoutPage = this.router.url.includes('/checkout-success') || this.router.url.includes('/checkout-cancel');
    });
  }

}
