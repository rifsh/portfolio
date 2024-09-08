import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, ButtonModule, RippleModule],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  options: string[] = ['Frontend', 'Backend', 'Fullstack'];
  selectedOption: string | null = null;
  isDropdownOpen = false;
  mail: string = 'rifshmuhammed@gmail.com';
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      eMail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.show()

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  onSubmit(event: Event) {

    event.preventDefault();

    const templateValues = {
      fName: this.contactForm.value.fName,
      lName: this.contactForm.value.lName,
      eMail: this.contactForm.value.eMail,
      phone: this.contactForm.value.phone,
      selectedService: this.selectedOption,
      message: this.contactForm.value.message
    }


    emailJs.send('service_m4av811', 'template_czg0f4b', templateValues, '7vBCRH8jMwYsw4iA6')
      .then((res: EmailJSResponseStatus) => {
        this.messageService.add({
          key: 'toast1',
          severity: 'success',
          summary: 'Success',
          detail: 'Email sent successfully!',
          life: 3000
        });
        this.contactForm.reset();
      }, (err) => {
        this.messageService.add({
          key: 'toast1',
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to send email.',
          life: 3000
        });
        console.log("An error occured", err.text);
      })
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
