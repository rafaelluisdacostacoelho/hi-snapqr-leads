import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = signal([
    {
      question: "🧠 O que são QR Codes inteligentes com IA?",
      answer: `Os QR Codes inteligentes utilizam inteligência artificial para fornecer insights detalhados sobre sua utilização. 
      A IA analisa dados como geolocalização, horário de acesso, dispositivo utilizado e padrões de comportamento do usuário. 
      Isso permite ajustes estratégicos em tempo real para otimizar suas campanhas e melhorar seus resultados.`,
      isOpen: false
    },
    {
      question: "🏢 Como posso usar QR Codes com IA para o meu negócio?",
      answer: `Você pode usar QR Codes inteligentes em diversas aplicações, como:<br><br>

      <strong>📢 Marketing e Vendas</strong><br>
      • Landing Pages Dinâmicas: Direcione clientes para páginas personalizadas com base no perfil e localização.<br>
      • Cupons Inteligentes: Gere QR Codes exclusivos para cada cliente e valide automaticamente os cupons na loja ou online.<br>
      • Testes A/B Automáticos: A IA pode dividir usuários entre diferentes ofertas e medir qual tem maior conversão.<br>
      • Redirecionamento Personalizado: Dependendo do local e do horário do scan, o QR Code pode direcionar para diferentes páginas.<br><br>

      <strong>🎟 Eventos e Feiras</strong><br>
      • Check-in Digital: Substitua crachás físicos e agilize a entrada de visitantes.<br>
      • Networking Inteligente: Permita que participantes escaneiem QR Codes para trocar contatos automaticamente.<br>
      • Agenda Interativa: Um único QR Code pode exibir uma programação atualizada conforme o evento acontece.<br>
      • Feedback Instantâneo: Colete opiniões dos visitantes ao final de palestras e workshops.<br><br>

      <strong>🛍 E-commerce e Lojas Físicas</strong><br>
      • Catálogo Digital Inteligente: Produtos físicos podem ter QR Codes que levam para vídeos, avaliações e recomendações.<br>
      • Carrinho Rápido: O QR Code pode adicionar automaticamente o produto ao carrinho no e-commerce.<br>
      • Rastreamento de Engajamento: Analise quais QR Codes levam a compras e otimize suas campanhas.<br>
      • Programa de Fidelidade Automatizado: Clientes podem escanear QR Codes para ganhar pontos de recompensa.<br><br>

      <strong>🍽 Restaurantes e Bares</strong><br>
      • Cardápio Inteligente: QR Codes dinâmicos que mostram menus atualizados e promoções.<br>
      • Pedidos Automatizados: Clientes podem escanear o QR Code, fazer o pedido e pagar sem esperar um garçom.<br>
      • Sugestões Personalizadas: A IA pode recomendar pratos baseados no histórico de pedidos.<br><br>

      <strong>🎓 Educação e Treinamento</strong><br>
      • Materiais de Aula Dinâmicos: Professores podem compartilhar conteúdos interativos e quizzes.<br>
      • Certificados Digitais: Emitir e validar certificados através de QR Codes únicos para cada aluno.<br>
      • Treinamentos Empresariais: Empresas podem usar QR Codes para acessar vídeos, tutoriais e materiais de onboarding.<br><br>

      <strong>🏭 Indústria e Logística</strong><br>
      • Rastreamento em Tempo Real: Gere QR Codes para acompanhar cada etapa do transporte e entrega.<br>
      • Manutenção Inteligente: Máquinas podem ter QR Codes que mostram manuais e vídeos de reparo específicos.<br>
      • Controle de Estoque: Escaneie QR Codes para visualizar histórico, localização e movimentação de produtos.<br><br>

      <strong>🏥 Saúde e Bem-estar</strong><br>
      • Histórico Médico Digital: Pacientes podem acessar prontuários médicos seguros ao escanear QR Codes.<br>
      • Lembretes de Medicamentos: QR Codes podem redirecionar para alertas personalizados de horários de remédios.<br>
      • Triagem Rápida: Pacientes podem fazer pré-cadastros online antes de consultas escaneando um QR Code na recepção.<br><br>

      <strong>🔒 Segurança e Acesso</strong><br>
      • Autenticação Segura: Use QR Codes para autenticação em sistemas sem necessidade de senhas.<br>
      • Controle de Acesso: Funcionários e visitantes podem escanear QR Codes para liberar catracas e portas.<br>
      • Prevenção contra Falsificações: Produtos de alto valor podem ter QR Codes únicos para validação de autenticidade.`,
      isOpen: false
    },
    {
      question: "💻 Qual a vantagem de usar IA na análise de QR Codes?",
      answer: `Diferente dos QR Codes tradicionais, os QR Codes com IA permitem:<br><br>

      • <strong>Inferências avançadas</strong> sobre quem está acessando os links.<br>
      • <strong>Otimização contínua</strong> de campanhas com base no comportamento do usuário.<br>
      • <strong>Redirecionamento inteligente</strong>, enviando usuários diferentes para destinos personalizados.<br>
      • <strong>Prevenção de fraudes</strong>, detectando usos suspeitos ou acessos indevidos.`,
      isOpen: false
    },
    {
      question: "🛡️ Os QR Codes são seguros? Como a IA contribui para a segurança?",
      answer: `Sim! Nossa IA protege os QR Codes contra acessos indevidos e tentativas de manipulação. Com tecnologias avançadas, conseguimos:<br><br>

      • <strong>Detectar padrões incomuns de acesso</strong> e bloquear atividades suspeitas.<br>
      • <strong>Garantir que links sejam sempre confiáveis</strong>, impedindo o redirecionamento para páginas maliciosas.<br>
      • <strong>Proteger contra cópias indevidas</strong>, garantindo que apenas usuários autorizados possam acessá-los.`,
      isOpen: false
    }
  ]);

  toggleFAQ(index: number) {
    const updatedFaqs = this.faqs().map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    );
    this.faqs.set(updatedFaqs);
  }
}
