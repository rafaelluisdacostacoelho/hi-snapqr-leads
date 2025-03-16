import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactService } from '../../services/contact.service';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = signal(false);
  loading = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  constructor(private fb: FormBuilder, private contactService: ContactService, private actionService: ActionService) {
    this.contactForm = this.fb.group({
      origin: ['HiSnapQR Leads'],
      action: [''],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      jobTitle: [''],
      interest: ['', Validators.required],
      message: [''],
      subscribe: [false],
      selectedPlan: [this.actionService.getContext()] // Adicionando o campo para rastrear o plano
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.contactForm.invalid) {
      return;
    }

    this.loading.set(true);

    this.contactService.sendContact(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage.set('Contato enviado com sucesso!');
        this.contactForm.reset();
        this.submitted.set(false);
      },
      error: () => {
        this.errorMessage.set('Erro ao enviar contato. Tente novamente.');
      }
    }).add(() => this.loading.set(false));
  }
}
