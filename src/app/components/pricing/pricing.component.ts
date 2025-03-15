import { Component } from '@angular/core';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  constructor(private actionService: ActionService) {}

  setContext(context: string) {
    this.actionService.setContext(context);
  }
}
