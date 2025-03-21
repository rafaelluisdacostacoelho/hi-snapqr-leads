import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FeaturesComponent } from '../features/features.component';
import { PricingComponent } from '../pricing/pricing.component';
import { FaqComponent } from '../faq/faq.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-principal',
  imports: [
    HeroSectionComponent,
    FeaturesComponent,
    PricingComponent,
    FaqComponent,
    ContactFormComponent,
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
