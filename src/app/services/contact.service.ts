import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/contact.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendContact(contact: Contact): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/contacts`, contact);
  }
}
