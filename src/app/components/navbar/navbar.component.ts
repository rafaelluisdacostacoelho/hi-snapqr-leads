import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private actionService: ActionService) { }

  setAction(action: string) {
    this.actionService.setAction(action);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
