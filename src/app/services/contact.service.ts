import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
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
  private apiUrl = 'https://api.example.com/contacts'; // Altere para sua URL real

  constructor(private http: HttpClient) {}

  sendContact(contact: Contact): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
}
