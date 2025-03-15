import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private contextSource = new BehaviorSubject<string | null>(null);
  context$ = this.contextSource.asObservable();

  setContext(context: string) {
    this.contextSource.next(context);
  }

  getContext(): string | null {
    return this.contextSource.value;
  }
}
