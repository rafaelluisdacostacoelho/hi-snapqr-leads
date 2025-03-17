import { Component } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  isMenuOpen = false;

  constructor(private actionService: ActionService) { }

  setAction(action: string) {
    this.actionService.setAction(action);
  }
}
