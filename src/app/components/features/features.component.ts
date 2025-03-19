import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  @HostBinding('class.rotate-y-180') isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
