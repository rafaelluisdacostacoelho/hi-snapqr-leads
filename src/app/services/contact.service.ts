import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ContactRequest } from '../models/requests/contact.request';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendContact(contact: ContactRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/contacts`, contact);
  }
}
