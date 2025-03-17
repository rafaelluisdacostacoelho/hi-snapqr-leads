import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private actionSubject = new BehaviorSubject<string | null>(null);
  action$ = this.actionSubject.asObservable();

  setAction(Action: string) {
    this.actionSubject.next(Action);
  }

  getAction(): string | null {
    return this.actionSubject.getValue();
  }
}
