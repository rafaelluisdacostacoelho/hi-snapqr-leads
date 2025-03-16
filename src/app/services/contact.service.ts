import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  origin: string;
  action: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  interest: string;
  message?: string;
  subscribe: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://api.hisnapqr.com/api/contacts';

  constructor(private http: HttpClient) {}

  sendContact(contact: Contact): Observable<any> {
    contact.origin = 'hisnapqr__leads';
    return this.http.post(this.apiUrl, contact);
  }
}
