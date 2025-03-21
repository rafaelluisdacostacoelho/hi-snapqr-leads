import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CheckoutResponse } from '../models/responses/checkout.response';

@Injectable({
  providedIn: 'root'
})
export class StripeCheckoutService {

  constructor(private http: HttpClient) { }

  createCheckoutSession(productId: string, priceId: string, couponId: string) {
    return this.http.post<CheckoutResponse>(`${environment.apiUrl}/api/presales`, { productId, priceId, couponId });
  }
}
