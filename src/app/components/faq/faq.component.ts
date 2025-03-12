import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    { question: 'O que é um QR Code com IA?', answer: 'Um QR Code com IA utiliza Inteligência Artificial para otimizar sua leitura, rastreamento e personalização.', isOpen: false },
    { question: 'Como a Inteligência Artificial melhora os QR Codes?', answer: 'A IA analisa padrões de uso, otimiza a geração e personaliza conteúdos dinâmicos para oferecer uma melhor experiência.', isOpen: false },
    { question: 'Posso rastrear quem escaneia meus QR Codes?', answer: 'Sim! Você pode rastrear dados como localização, horário e dispositivo do usuário.', isOpen: false },
    { question: 'É possível personalizar QR Codes com IA?', answer: 'Sim! Você pode alterar cores, logotipos, molduras e até mesmo adicionar animações.', isOpen: false },
    { question: 'Como os QR Codes com IA ajudam a aumentar vendas?', answer: 'Eles permitem experiências interativas, direcionando clientes para ofertas especiais e funis otimizados.', isOpen: false },
    { question: 'Qual a diferença entre QR Codes comuns e QR Codes inteligentes?', answer: 'QR Codes comuns armazenam dados estáticos, enquanto QR Codes inteligentes usam IA para personalização e rastreamento.', isOpen: false }
  ];

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
