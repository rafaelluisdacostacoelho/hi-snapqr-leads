import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ActionService } from '../../services/action.service';
import { StripeCheckoutService } from '../../services/stripe-checkout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PricingComponent {

  anualDiscount: number = 25;
  lifetimeDiscount: number = 50;

  isAnnual = false;

  pricingPlans = [
    {
      id: 1,
      name: 'Plano Pessoal',
      priceMonthly: 15,
      priceAnnual: 15 * 12 * (100 - this.anualDiscount) / 100,
      features: [
        'Geração de QR Code com IA',
        'QR Codes Estáticos',
        'Personalização Básica (cores e formato)',
        '25 QR Codes por mês',
        'Suporte Padrão'
      ]
    },
    {
      id: 2,
      name: 'Plano Profissional',
      priceMonthly: 45,
      priceAnnual: 45 * 12 * (100 - this.anualDiscount) / 100,
      features: [
        'QR Codes Inteligentes com IA',
        'QR Codes Dinâmicos',
        'Personalização Avançada (logotipo, cores, redirecionamento)',
        '100 QR Codes por mês',
        'Relatórios de Acesso (número de scans, dispositivos)',
        'Suporte Prioritário'
      ]
    },
    {
      id: 3,
      name: 'Plano Empresarial',
      priceMonthly: 135,
      priceAnnual: 135 * 12 * (100 - this.anualDiscount) / 100,
      features: [
        'Todos os recursos do Plano Profissional',
        'QR Codes com Geolocalização',
        'Rastreamento em Tempo Real',
        'Relatórios Detalhados de Uso',
        '300 QR Codes por mês',
        'Interação via API para automação',
        'Suporte Dedicado 24/7'
      ]
    }
  ];

  // Calculando o valor original e o desconto do Plano Vitalício
  originalLifetimePrice = 3 * this.pricingPlans[2].priceAnnual; // 3 anos do plano mais caro
  discountLifetimePrice = this.originalLifetimePrice * (100 - this.lifetimeDiscount) / 100; // Aplicando 50% de desconto

  lifetimePlan = {
    name: 'Plano Vitalício',
    originalPrice: this.originalLifetimePrice,
    discountedPrice: this.discountLifetimePrice,
    features: [
      'Acesso vitalício a todas as ferramentas premium',
      'Pagamento único, sem mensalidades ou taxas ocultas',
      'Oferta exclusiva e por tempo limitado.',
      'Todas as atualizações futuras do sistema inclusas',
      'Todas as funcionalidades do plano mais avançado',
      'Prioridade máxima no suporte e novas features',
      'Ideal para empresas que querem reduzir custos no longo prazo'
    ]
  };

  constructor(
    private actionService: ActionService,
    private stripeCheckoutService: StripeCheckoutService,
    private router: Router
  ) { }

  setAction(action: string) {
    this.actionService.setAction(action);
  }

  togglePricing() {
    this.isAnnual = !this.isAnnual;
  }

  goToCheckout() {
    this.stripeCheckoutService
      .createCheckoutSession(
        environment.stripe.lifetimePlan.productId,
        environment.stripe.lifetimePlan.priceId,
        environment.stripe.lifetimePlan.couponId
      )
      .subscribe({
        next: (response: any) => {
          window.location.href = response.url;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }
}
